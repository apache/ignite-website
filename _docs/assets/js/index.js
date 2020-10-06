import './code-tabs.js?1'
import {hideLeftNav, scrollLeftNavToActive} from './docs-menu.js?20201005'
//import {hideTopNav} from './top-navigation.js'
import './page-nav.js'




document.addEventListener('topNavigationShow', hideLeftNav)
// document.addEventListener('leftNavigationShow', hideTopNav)
window.addEventListener('load', scrollLeftNavToActive);


