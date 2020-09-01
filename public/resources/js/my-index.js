import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

import { loadJson } from './helpers/loadingHelper.js';
import { cafeImagesUrl, cafeDrinksUrl } from './data/urls.js';

import DrinkModel from './components/drink/model.js';
import createDrink from './components/drink/renderer.js';
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
    for await (let drinkInfo of getPopularDrinks()) {
        let drinkImageUrl = `${cafeImagesUrl}/${drinkInfo.image}`;

        let drinkModel = new DrinkModel(
            drinkInfo._id,
            drinkInfo.name,
            drinkImageUrl,
            drinkInfo.shortDescription,
            drinkInfo.prices
        );
        await drinkModel.init();

        let nDrink = createDrink(drinkModel);
        let nHeart = createHeart();
        nDrink.prepend(nHeart);

        nDrinks.append(nDrink);
    }
}
