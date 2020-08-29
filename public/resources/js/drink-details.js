import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

const preloader = document.querySelector('.preloader');


initMobileMenu();
const map = initMap('company-location');

window.addEventListener('load', onWindowLoaded);


async function onWindowLoaded() {
    preloader.classList.add('preloader_non-active');
}