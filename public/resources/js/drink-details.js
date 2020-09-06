import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

import { cafeImagesUrl, cafeDrinksUrl } from './data/urls.js';
import { loadJson, loadImage } from './helpers/loadingHelper.js';

import createDrinkDetails from './components/drink-details/renderer.js';
import initDrinkDetails from './components/drink-details/initializer.js';


const preloader = document.querySelector('.preloader');
const nBuyDrink = document.querySelector('.buy-drink-line');


initMobileMenu();
const map = initMap('company-location');

window.addEventListener('load', onWindowLoaded);


async function onWindowLoaded() {
    await showDrink();
    preloader.classList.add('preloader_non-active');
}
async function showDrink() {
    let url = `${cafeDrinksUrl}/${productId}`;
    let drinkInfo = await loadJson(url);

    let drinkImageUrl = `${cafeImagesUrl}/${drinkInfo.image}`;
    await loadImage(drinkImageUrl);


    let nDrinkDetails = createDrinkDetails(drinkInfo);
    initDrinkDetails(nDrinkDetails);
    nBuyDrink.append(nDrinkDetails);
}


