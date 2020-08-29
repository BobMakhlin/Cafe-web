import Drink from './drawers/drink.js';
import { fakeDrinksData } from './data/fake-data.js';
import Heart from './drawers/heart.js';
import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';
import later from './helpers/later.js';

const drinks = document.querySelector('.drinks');
const preloader = document.querySelector('.preloader');

initMobileMenu();
const map = initMap('company-location');
showPopularDrinks();

window.addEventListener('load', onWindowLoaded);



async function onWindowLoaded() {
    await later(1000);
    preloader.classList.add('preloader_non-active');
}

async function showPopularDrinks() {
    for (let drinkInfo of fakeDrinksData) {
        let drinkDrawer = new Drink(drinkInfo.id, drinkInfo.image, drinkInfo.name, drinkInfo.description, drinkInfo.prices);
        let heartDrawer = new Heart();

        let drinkDiv = await drinkDrawer.toHtmlElement();
        let heartDiv = heartDrawer.toHtmlElement();
        drinkDiv.prepend(heartDiv);

        drinks.append(drinkDiv);
    }
}
