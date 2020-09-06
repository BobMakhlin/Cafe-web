import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

import { loadJson, loadImage } from './helpers/loadingHelper.js';
import { cafeDrinksUrl, cafeImagesUrl } from './data/urls.js';

import createDrink from './components/drink/renderer.js';
import initDrink from './components/drink/initializer.js';


const nDrinks = document.querySelector('.drinks');
const preloader = document.querySelector('.preloader');


initMobileMenu();
const map = initMap('company-location');
window.addEventListener('load', onWindowLoaded);



async function onWindowLoaded() {
    await showDrinks();
    preloader.classList.add('preloader_non-active');
}

async function showDrinks() {
    let drinks = await loadJson(cafeDrinksUrl);

    for (let item of drinks) {
        await loadImage(`${cafeImagesUrl}/${item.image}`);

        let nDrink = createDrink(item);
        initDrink(nDrink, item);
        nDrinks.append(nDrink);
    }
}