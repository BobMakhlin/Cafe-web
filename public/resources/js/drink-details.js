import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';
import { cafeDrinksUrl } from './data/urls.js';
import { loadJson } from './helpers/loadingHelper.js';

const preloader = document.querySelector('.preloader');


initMobileMenu();
const map = initMap('company-location');

window.addEventListener('load', onWindowLoaded);


async function onWindowLoaded() {
    await showDrink();
    preloader.classList.add('preloader_non-active');
}
async function showDrink() {
    let url = `${cafeDrinksUrl}/${productId}`;

    let drink = await loadJson(url);
    console.log(drink);
}


