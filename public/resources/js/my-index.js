import Drink from './drawers/drink.js';
import Heart from './drawers/heart.js';
import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';
import { loadJson } from './helpers/loadingHelper.js';
import { cafeImagesUrl, cafeDrinksUrl } from './data/urls.js';
 

const drinks = document.querySelector('.drinks');
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
        let drinkImage = `${cafeImagesUrl}/${drinkInfo.image}`;
        let drinkDrawer = new Drink(drinkInfo._id, drinkImage, drinkInfo.name, drinkInfo.shortDescription, drinkInfo.prices);

        let heartDrawer = new Heart();

        let drinkDiv = await drinkDrawer.toHtmlElement();
        let heartDiv = heartDrawer.toHtmlElement();
        drinkDiv.prepend(heartDiv);

        drinks.append(drinkDiv);
    }
}
