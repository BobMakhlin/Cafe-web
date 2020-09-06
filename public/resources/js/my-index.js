import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

import { loadJson, loadImage } from './helpers/loadingHelper.js';
import { cafeImagesUrl, cafeDrinksUrl } from './data/urls.js';

import createDrink from './components/drink/renderer.js';
import initDrink from './components/drink/initializer.js';
import createHeart from './components/heart/renderer.js';


const nDrinks = document.querySelector('.drinks');
const preloader = document.querySelector('.preloader');

initMobileMenu();
const map = initMap('company-location');

window.addEventListener('load', onWindowLoaded);



async function onWindowLoaded() {
    await showPopularDrinks();
    preloader.classList.add('preloader_non-active');
}

async function* getPopularDrinks() {
    yield await loadJson(`${cafeDrinksUrl}/5f3240039cf1b670d43884c8`);
    yield await loadJson(`${cafeDrinksUrl}/5f3240039cf1b670d43884c9`);
    yield await loadJson(`${cafeDrinksUrl}/5f3240039cf1b670d43884ca`);
}
async function showPopularDrinks() {
    for await (let item of getPopularDrinks()) {

        await loadImage(`${cafeImagesUrl}/${item.image}`);

        let nDrink = getDrink(item);
        nDrinks.append(nDrink);

    }
}
function getDrink(model) {
    let nDrink = createDrink(model);
    initDrink(nDrink, model);
    
    let nHeart = createHeart();
    nDrink.prepend(nHeart);

    return nDrink;
}
