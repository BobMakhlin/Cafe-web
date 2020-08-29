import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';
import { loadJson } from './helpers/loadingHelper.js';
import { cafeDrinksUrl, cafeImagesUrl } from './data/urls.js';
import Drink from './drawers/drink.js';
import later from './helpers/later.js';

const drinksContainer = document.querySelector('.drinks');
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

    for (let drink of drinks) {
        let imageUrl = `${cafeImagesUrl}/${drink.image}`;

        let drinkDrawer = new Drink(drink._id, imageUrl, drink.name, 'Try coffees from Keniya, Ethiopia', drink.prices);
        let drinkDiv = await drinkDrawer.toHtmlElement();
        drinksContainer.append(drinkDiv);
    }
}