// page init
jQuery(function(){
    initAnchors();
});

// initialize fixed blocks on scroll
function initAnchors() {
    new SmoothScroll({
        anchorLinks: 'a[href^="#"]',
        activeClasses: 'parent',
        anchorActiveClass: 'active',
        sectionActiveClass: 'active'
    });
}

/*!
 * SmoothScroll module
 */
;(function($, exports) {

    // private variables
    var page,
        win = $(window),
        activeBlock, activeWheelHandler,
        wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll');

    // animation handlers
    function scrollTo(offset, options, callback) {
        // initialize variables
        var scrollBlock;
        if(document.body) {
            if(typeof options === 'number') {
                options = { duration: options };
            } else {
                options = options || {};
            }
            page = page || $('html, body');
            scrollBlock = options.container || page;
        } else {
            return;
        }

        // treat single number as scrollTop
        if(typeof offset === 'number') {
            offset = { top: offset };
        }

        // handle mousewheel/trackpad while animation is active
        if(activeBlock && activeWheelHandler) {
            activeBlock.off('mousewheel', activeWheelHandler);
        }
        if(options.wheelBehavior && options.wheelBehavior !== 'none') {
            activeWheelHandler = function(e) {
                if(options.wheelBehavior === 'stop') {
                    scrollBlock.off('mousewheel', activeWheelHandler);
                    scrollBlock.stop();
                } else if(options.wheelBehavior === 'ignore') {
                    e.preventDefault();
                }
            };
            activeBlock = scrollBlock.on('mousewheel', activeWheelHandler);
        }

        // start scrolling animation
        scrollBlock.stop().animate({
            scrollLeft: offset.left,
            scrollTop: offset.top
        }, options.duration, function(){
            if(activeWheelHandler) {
                scrollBlock.off('mousewheel', activeWheelHandler);
            }
            if($.isFunction(callback)) {
                callback();
            }
        });
    }

    // smooth scroll contstructor
    function SmoothScroll(options) {
        this.options = $.extend({
            anchorLinks: 'a[href^="#"]',    // selector or jQuery object
            container: null,        // specify container for scrolling (default - whole page)
            extraOffset: null,        // function or fixed number
            activeClasses: null,    // null, "link", "parent"
            easing: 'swing',        // easing of scrolling
            animMode: 'duration',    // or "speed" mode
            animDuration: 800,        // total duration for scroll (any distance)
            animSpeed: 1500,        // pixels per second
            anchorActiveClass: 'anchor-active',
            sectionActiveClass: 'section-active',
            wheelBehavior: 'stop', // "stop", "ignore" or "none"
            useNativeAnchorScrolling: false // do not handle click in devices with native smooth scrolling
        }, options);
        this.init();
    }
    SmoothScroll.prototype = {
        init: function() {
            this.initStructure();
            this.attachEvents();
        },
        initStructure: function(options) {
            this.container = this.options.container ? $(this.options.container) : $('html,body');
            this.scrollContainer = this.options.container ? this.container : win;
            this.anchorLinks = $(this.options.anchorLinks);
        },
        getAnchorTarget: function(link) {
            // get target block from link href
            var targetId = $(link).attr('href');
            return $(targetId.length > 1 ? targetId : 'html');
        },
        getTargetOffset: function(block) {
            // get target offset
            var blockOffset = block.offset().top;
            if(this.options.container) {
                blockOffset -= this.container.offset().top - this.container.prop('scrollTop');
            }

            // handle extra offset
            if(typeof this.options.extraOffset === 'number') {
                blockOffset -= this.options.extraOffset;
            } else if(typeof this.options.extraOffset === 'function') {
                blockOffset -= this.options.extraOffset(block);
            }
            return {top: blockOffset};
        },
        attachEvents: function() {
            var self = this;

            // handle active classes
            if(this.options.activeClasses) {
                // cache structure
                this.anchorData = [];
                this.anchorLinks.each(function() {
                    var link = jQuery(this),
                        targetBlock = self.getAnchorTarget(link),
                        anchorDataItem;

                    $.each(self.anchorData, function(index, item) {
                        if(item.block[0] === targetBlock[0]) {
                            anchorDataItem = item;
                        }
                    });

                    if(anchorDataItem) {
                        anchorDataItem.link = anchorDataItem.link.add(link);
                    } else {
                        self.anchorData.push({
                            link: link,
                            block: targetBlock
                        });
                    }
                });

                // add additional event handlers
                this.resizeHandler = function() {
                    self.recalculateOffsets();
                };
                this.scrollHandler = function() {
                    self.refreshActiveClass();
                };

                this.recalculateOffsets();
                this.scrollContainer.on('scroll', this.scrollHandler);
                win.on('resize', this.resizeHandler);
            }

            // handle click event
            this.clickHandler = function(e) {
                self.onClick(e);
            };
            if(!this.options.useNativeAnchorScrolling) {
                this.anchorLinks.on('click', this.clickHandler);
            }
        },
        recalculateOffsets: function() {
            var self = this;
            $.each(this.anchorData, function(index, data) {
                data.offset = self.getTargetOffset(data.block);
                data.height = data.block.outerHeight();
            });
            this.refreshActiveClass();
        },
        refreshActiveClass: function() {
            var self = this,
                foundFlag = false,
                winHeight = win.height(),
                containerHeight = this.container.prop('scrollHeight'),
                viewPortHeight = this.scrollContainer.height(),
                scrollTop = this.options.container ? this.container.prop('scrollTop') : win.scrollTop();

            // user function instead of default handler
            if(this.options.customScrollHandler) {
                this.options.customScrollHandler.call(this, scrollTop, this.anchorData);
                return;
            }

            // sort anchor data by offsets
            this.anchorData.sort(function(a, b) {
                return a.offset.top - b.offset.top;
            });
            function toggleActiveClass(anchor, block, state) {
                anchor.toggleClass(self.options.anchorActiveClass, state);
                block.toggleClass(self.options.sectionActiveClass, state);
            }

            // default active class handler
            $.each(this.anchorData, function(index) {
                var reverseIndex = self.anchorData.length - index - 1,
                    data = self.anchorData[reverseIndex],
                    anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

                if(scrollTop >= containerHeight - viewPortHeight) {
                    // handle last section
                    if(reverseIndex === self.anchorData.length - 1) {
                        toggleActiveClass(anchorElement, data.block, true);
                    } else {
                        toggleActiveClass(anchorElement, data.block, false);
                    }
                } else {
                    // handle other sections
                    if(!foundFlag && (scrollTop >= data.offset.top - 1 || reverseIndex === 0) ) {
                        foundFlag = true;
                        toggleActiveClass(anchorElement, data.block, true);
                    } else {
                        toggleActiveClass(anchorElement, data.block, false);
                    }
                }
            });
        },
        calculateScrollDuration: function(offset) {
            var distance;
            if(this.options.animMode === 'speed') {
                distance = Math.abs(this.scrollContainer.scrollTop() - offset.top);
                return (distance / this.options.animSpeed) * 1000;
            } else {
                return this.options.animDuration;
            }
        },
        onClick: function(e) {
            var targetBlock = this.getAnchorTarget(e.currentTarget),
                targetOffset = this.getTargetOffset(targetBlock);

            e.preventDefault();
            scrollTo(targetOffset, {
                container: this.container,
                wheelBehavior: this.options.wheelBehavior,
                duration: this.calculateScrollDuration(targetOffset),
            });
        },
        destroy: function() {
            if(this.options.activeClasses) {
                win.off('resize', this.resizeHandler);
                this.scrollContainer.off('scroll', this.scrollHandler);
            }
            this.anchorLinks.off('click', this.clickHandler);
        }
    };

    // public API
    $.extend(SmoothScroll, {
        scrollTo: function(blockOrOffset, durationOrOptions, callback) {
            scrollTo(blockOrOffset, durationOrOptions, callback);
        }
    });

    // export module
    exports.SmoothScroll = SmoothScroll;
}(jQuery, this));