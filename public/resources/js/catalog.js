import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

import { loadJson } from './helpers/loadingHelper.js';
import { cafeDrinksUrl, cafeImagesUrl } from './data/urls.js';

import DrinkModel from './components/drink/model.js';
import DrinkRenderer from './components/drink/renderer.js';


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

    for (let drinkInfo of drinks) {
        let drinkImageUrl = `${cafeImagesUrl}/${drinkInfo.image}`;

        let drinkModel = new DrinkModel(
            drinkInfo._id,
            drinkInfo.name,
            drinkImageUrl,
            drinkInfo.shortDescription,
            drinkInfo.prices
        );
        await drinkModel.init();


        let drinkRenderer = new DrinkRenderer();
        let nDrink = drinkRenderer.create(drinkModel);

        nDrinks.append(nDrink);
    }
}