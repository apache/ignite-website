/**
 * Модальные окна
 * см. https://addmorescripts.github.io/hystModal/index_ru.html
 */
 if (typeof HystModal !== "undefined") {
    var xModal = new HystModal({
        linkAttributeName: "data-hystmodal",
        waitTransitions: true,
        beforeOpen: function(modal){
        },
        afterClose: function(modal) {
        },
    });
    window.xxModal = xModal;
    var menuModal = new HystModal({
        linkAttributeName: "data-menumodal",
        waitTransitions: true,
        backscroll: false,
        catchFocus:false,
    });
}




/**
 * Скрипт GLightbox запуск на элементах с классом .glightbox
 * см. https://biati-digital.github.io/glightbox/
 */
 if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
        plyr: {
            config: {
                ratio: '16:9',
                youtube: {
                    noCookie: true,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                },
            }
        },
    });
}


// window.__forceSmoothScrollPolyfill__ = true;

let submenuItems = Array.prototype.slice.call(document.querySelectorAll(".cmtynavblock__list a"));
let submenuItemsArray = submenuItems.map(el => {
    return {
        link: el,
        href: el.getAttribute('href'),
        block: document.querySelector(el.getAttribute('href'))
    }
});



//scroll to top button
(function scrollTop() {
    const scrollButton = document.querySelector('.scrollTop');
    if (!scrollButton) return;
    let trigger = false;
    function resetTrigger() {
        trigger = true;
    }
    window.addEventListener('scroll', resetTrigger);
    let scrollInterval = setInterval(function () {
        if (!trigger) return;
        trigger = false;
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrollActions(scrolled);
    }, 150);
    scrollButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
})();







function topmeny(){
    let dropMenu = document.querySelector('.dropmenu');
    let dropBack = document.querySelector('.dropmenu__back');
    let hdr = document.querySelector('.hdr');
    if(!dropMenu) return;

    let timeoutMenu;

    document.addEventListener('mouseover', (e) => {
        e.preventDefault();
        let item = e.target.closest('a[data-panel].hdrmenu--expanded');
        if(item && item.dataset.panel !== ""){
            clearTimeout(timeoutMenu);
            timeoutMenu = setTimeout(()=> {
                if(!document.querySelector('.hdr__wrap:hover')){
                    clearTimeout(timeoutMenu);
                    console.log("Menu is stopped");
                    return;
                }
                document.querySelectorAll('.dropmenu__panel').forEach(el => {
                    el.classList.toggle('active', el.dataset.menupanel === item.dataset.panel);                    
                });
                document.querySelectorAll('.hdrmenu--expanded.active').forEach(el => {
                    el.classList.remove('active');
                });
                hdr && hdr.classList.add('opened');
                item.classList.add('active');
                dropMenu.classList.add('active');
                dropBack.classList.add('active');
                console.log("Run height recalc");
                dropMenu.style.height = document.querySelector('.dropmenu__panel.active').scrollHeight + "px";
            }, 200);
        }
        let shadow = e.target.closest('.dropmenu__back');
        if(!shadow) {
            shadow = !(e.target.closest('.dropmenu') || e.target.closest('.js-hasdrop'));
            // console.log(shadow);
        }
        if (shadow) {
            dropMenu.classList.remove('active');
            dropMenu.style.height = "";
            dropBack.classList.remove('active');
            document.querySelectorAll('.hdrmenu--expanded.active').forEach(el => {
                el.classList.remove('active');
            });
            hdr && hdr.classList.remove('opened');
        } 
    });
}
if(window.innerWidth > 1199){topmeny();}



let isMenuFloated = false;
let isMenuPinned = false;

function scrollActions(scrolled){
    const scrollButton = document.querySelector('.scrollTop');
    const stikyHeader = document.querySelector('.hdrfloat');
    const menuLine = document.querySelector('.jsHdrLine');
    const menuBase = document.querySelector('.jsHdrBase');
    const menuFloatBase = document.querySelector('.jsHdrFloatBase');

    scrollButton.classList.toggle('active', scrolled >= 100);

    if(scrolled >= 600 && !isMenuPinned){
        document.documentElement.classList.add('hdr-active');
        isMenuPinned = true;
    }
    if(scrolled < 500 && isMenuPinned){
        document.documentElement.classList.remove('hdr-active');
        isMenuPinned = false;
    }

    if(scrolled >= 600 && !isMenuFloated){
        // console.log("Переносим меню");
        menuFloatBase.append(menuLine);
        isMenuFloated = true;
    }

    if(scrolled < 600 && isMenuFloated){
        // console.log("Возвращаем меню обратно");
        menuBase.append(menuLine);
        isMenuFloated = false;
    }

    if(submenuItemsArray.length){
        reactivateSubmenu(scrolled);
    }
}


function reactivateSubmenu(scrolled){
    let hdr = document.querySelector('.hdr__wrap');
    let menuEl = document.querySelector('.cmtynavblock__list');
    let offset = menuEl.scrollHeight + hdr.scrollHeight + 10;
    if(!submenuItemsArray.length) return;
    submenuItemsArray.forEach((el, index, arr) => {
        let blockCoord = el.block.getBoundingClientRect().top + window.scrollY - offset;
        let blockCoordNext = Infinity;
        if(arr[index + 1]){
            blockCoordNext = arr[index + 1].block.getBoundingClientRect().top + window.scrollY - offset;
        }
        if(scrolled >= blockCoord && scrolled < blockCoordNext){
            el.link.classList.add('cmtynavblock__active');
        } else {
            el.link.classList.remove('cmtynavblock__active');
        }
    })
    // console.log(submenuItemsArray);
}




function mobilemeny() {
    const testEl = document.querySelector('.mobmenu__opener');
    if(!testEl) return;
    document.addEventListener('click', (e) => {
        const opener = e.target.closest('.mobmenu__opener');
        if(!opener) return;
        e.preventDefault();
        const listLi = opener.closest('li');
        const listUl = listLi.querySelector('ul');

        if(listLi.classList.contains('isopen')){
            listUl.style.height = '';
            listLi.classList.remove('isopen')
            return;
        }
        listUl.style.height = listUl.scrollHeight + 'px';
        listLi.classList.add('isopen');

    });
};
mobilemeny();





function accordeons(){
    let testEl = document.querySelector('[data-hidebox]');
    if(!testEl) return;
    document.addEventListener('click', function(e) {
        let accordLink = e.target.closest('[data-hideopen]');
        if(!accordLink) return;
        e.preventDefault();
        console.log(accordLink);
        let accordBox = document.querySelector('[data-hidebox="' + accordLink.dataset.hideopen + '"]');
        console.log(accordBox);
        if(!accordBox){ console.log("Error: accordion element not found"); return;}
        if(!accordBox.style.height){
            accordLink.classList.add('isopen');
            accordBox.style.height = accordBox.scrollHeight + "px";
            if(accordLink.dataset.invis){
                accordLink.remove();
            }
        } else {
            accordLink.classList.remove('isopen');
            accordBox.style.height = "";
        }
    });
}
accordeons();





function reActivateMenuClass(elem, selectors, activeClassName) {
    document.querySelectorAll(selectors).forEach(el => {
        el.classList.toggle(activeClassName, el === elem);
    });
}





function submenuScroller(){
    let hdr = document.querySelector('.hdr__wrap');
    let menuEl = document.querySelector('.cmtynavblock__list');
    if(!menuEl) return;

    menuEl.addEventListener('click', (e) => {
        let link = e.target.closest('.cmtynavblock__list a');
        if(!link) return;
        e.preventDefault();
        scrollToBlock(e, link.getAttribute('href'), (menuEl.scrollHeight + hdr.scrollHeight));
    });
}
submenuScroller();






function scrollToBlock(e, selector, offset = 0) {
    let elem = document.querySelector(selector);
    if(!elem) return;
    e.preventDefault();
    let coords = elem.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: coords,
        behavior: 'smooth',
    });
}



if(typeof hljs !== 'undefined'){
    hljs.highlightAll();
}




function simpleTabs(){
    if(!document.querySelector('*[data-tab]')) return;
    document.addEventListener('click', (e) => {
        let link = e.target.closest('[data-tablink]');
        if(!link) return;
        e.preventDefault();
        let wrap = e.target.closest('.jsTabWrap');
        let needTab = document.querySelector('[data-tab="' + link.dataset.tablink + '"]');
        if(!needTab){
            console.log("Tab - " + link.dataset.tablink + " not found");
            return;
        }
        wrap.querySelectorAll('[data-tablink]').forEach(el => {
            el.classList.remove('active');
        })
        link.classList.add('active');

        wrap.querySelectorAll('[data-tab]').forEach(el => {
            el.classList.remove('active');
        });
        needTab.classList.add('active');
    });
}
simpleTabs();



function frontpageTabs(){
    if(!document.querySelector('*[data-ftab]')) return;
    document.addEventListener('click', (e) => {
        let link = e.target.closest('[data-ftablink]');
        if(!link) return;
        e.preventDefault();
        let wrap = e.target.closest('.jsTabWrap');
        let needTab = document.querySelector('[data-ftab="' + link.dataset.ftablink + '"]');
        if(!needTab){
            console.log("Tab - " + link.dataset.ftablink + " not found");
            return;
        }
        wrap.querySelectorAll('[data-ftablink]').forEach(el => {
            el.classList.remove('active');
        })
        link.classList.add('active');

        wrap.querySelectorAll('[data-ftab]').forEach(el => {
            el.classList.remove('active');
        });
        needTab.classList.add('active');
    });
}
frontpageTabs();




/**
 * Change Video Block into Iframe with Youtube Video
 */
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
document.addEventListener('click', function(e) {
    let videoLink = e.target.closest('[data-youtube]');
    if(!videoLink) return;
    let href = videoLink.getAttribute('href');
    console.log(href);
    e.preventDefault();
    let videoBlock = e.target.closest('.comvideo__box');
    videoBlock.innerHTML = "";

    let youtId = youtube_parser(href);
    let iframeHTML = `<iframe 
        title=${youtId}
        src="https://www.youtube.com/embed/${youtId}?autoplay=1&showinfo=0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>`;
    videoBlock.insertAdjacentHTML('beforeend', iframeHTML);
});






/**
 * Download Table Save Popup
 */
function downloadPopBlock(){
    if(!document.querySelector('.jsDownTablePopUp')) return;

    document.addEventListener('click', function(e){
        let popup = e.target.closest('.jsDownTablePopUp');    
        document.querySelectorAll('.jsDownTablePopUp').forEach(el => {
            if(el !== popup){
                el.querySelector('.downtable__button').classList.remove('active');
            }
        });
        if(!popup) return;
        popup.querySelector('.downtable__button').classList.add('active');
    });
}
// downloadPopBlock();



/**
 * Download change HREF of all link
 * === turned OFF ===
 */
function downloadChangeHref() {
    let selectBox = document.querySelector('.jsDownloadDomenSelect');
    if(!selectBox) return;

    let saveButton = document.querySelector('.jsChangeLink');
    saveButton.addEventListener('click', (e) => {
        let neededHostName = selectBox.value;
        let allLinks = document.querySelectorAll('.jsLinksInside a');
        allLinks.forEach((link) => {
            let linkElem = new URL(link.href);
            if(linkElem.hostname == "archive.apache.org") return;
            linkElem.hostname = neededHostName;
            link.href = linkElem.toString();
        });
        e.target.innerHTML = "Changed";
        e.target.classList.remove('download-choser__button--blue');
        // alert('Changed to ' + neededHostName);
        e.preventDefault();
    });
    selectBox.addEventListener('change', (e)=>{
        saveButton.innerHTML = "Change";
        saveButton.classList.add('download-choser__button--blue');
    });
}
// downloadChangeHref();




/**
 * Submit form to download.cgi on change soruce button clicked
 */
function chanheDowloadPreferred() {
    if (!document.querySelector('.jsChangeLink')) return;
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.jsChangeLink');
        if(!button) return;
        e.preventDefault();
        const formBox = e.target.closest('form');
        if(!formBox) return;
        formBox.submit();
    });
}
chanheDowloadPreferred();




/**
 * FrontPage videos Slider
 */
if (typeof Swiper !== "undefined") {
    let jsMainSlider = new Swiper('.jsFrontVideosSwiper', {
        autoHeight: false,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        pagination: {
            el: ".frontstories__pag",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            prevEl: ".frontstories__sliderwrap .ctrl--prev",
            nextEl: ".frontstories__sliderwrap .ctrl--next",
        },
        breakpoints: {
            //when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            1199 : {
                slidesPerView: 3,
            },
        },
    });
}







/**
 * Subscrube buttons drop-downs
 */
function minidropdowns() {
    document.addEventListener('click', (e) => {
        let buttonLink = e.target.closest('[data-poplink]');
        let dropLink = e.target.closest('.pushup');
        document.querySelectorAll('.isopen[data-poplink]').forEach((el) => {
            el !== buttonLink ? el.classList.remove('isopen') : null;
        })
        if (!buttonLink || dropLink) return;
        e.preventDefault();
        const dropBlock = document.querySelector(`[data-pop="${buttonLink.dataset.poplink}"]`);
        if (!dropBlock) { console.log("dropdown not found"); return; }
        // console.log(dropBlock);
        buttonLink.classList.toggle('isopen');
    });
};
minidropdowns();