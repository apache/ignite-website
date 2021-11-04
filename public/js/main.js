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
    }, 250);
    scrollButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
})();


// const jsNavBlock = document.querySelector('.jsNavBlock');
// const startNavBlockCoord = jsNavBlock.getBoundingClientRect().y + window.pageYOffset;
// console.log(startNavBlockCoord);

function scrollActions(scrolled){
    const scrollButton = document.querySelector('.scrollTop');
    const stikyHeader = document.querySelector('.hdrfloat');
    

    scrollButton.classList.toggle('active', scrolled >= 100);
    document.documentElement.classList.toggle('hdr-active', scrolled >= 600);
}



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




// function checkMenuIsPinned() {
//     const el = document.querySelector(".cmtynavblock");
//     if(!el) return;
//     const observer = new IntersectionObserver(function(arrayEvent) {
//         console.log(arrayEvent);
//         let topCoord = arrayEvent[0].boundingClientRect.top;
//         let ratio = arrayEvent[0].intersectionRatio;
//         el.classList.toggle("is-pinned", (topCoord < 10 && ratio < 1));
//     }, { threshold: [1] });
//     observer.observe(el);
// }
// checkMenuIsPinned();




function reActivateMenuClass(elem, selectors, activeClassName) {
    document.querySelectorAll(selectors).forEach(el => {
        el.classList.toggle(activeClassName, el === elem);
    });
}




function menuScroller() {
    let menuEl = document.querySelector('.cmtynavblock__list');
    if(!menuEl) return;

    let isNeedObserve = true;

    menuEl.addEventListener('click', (e) => {
        let link = e.target.closest('.cmtynavblock__list a');
        // console.log(link);
        if(!link) return;
        e.preventDefault();

        let targetBlock = document.querySelector(link.getAttribute("href"));
        let coords = targetBlock.getBoundingClientRect().top + window.scrollY;
        isNeedObserve = false;
        window.scrollTo({
            top: coords - menuEl.scrollHeight,
            behavior: 'smooth',
        });
        setTimeout(() => {
            isNeedObserve = true;
        }, 400);
        reActivateMenuClass(link, ".cmtynavblock__list a", 'cmtynavblock__active');
    });


    let cmtyObserver = new IntersectionObserver((e) => {
        let eventTar = e[0];
        // console.log(eventTar);
        if(isNeedObserve && eventTar.isIntersecting){
            reActivateMenuClass(
                document.querySelector('.cmtynavblock__list a[href="#' + eventTar.target.id + '"]'),
                ".cmtynavblock__list a",
                'cmtynavblock__active'
            );
        }
    }, { threshold: 0 });
    menuEl.querySelectorAll('li a').forEach(el => {
        cmtyObserver.observe(document.querySelector(el.getAttribute('href')));
    })


}
menuScroller();





function scrollToBlock(e,selector) {
    let elem = document.querySelector(selector);
    if(!elem) return;
    e.preventDefault();
    let coords = elem.getBoundingClientRect().top + window.scrollY;
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





function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


/**
 * Change Video Block into Iframe with Youtube Video
 */
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
downloadPopBlock();