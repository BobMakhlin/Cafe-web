import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';
import { loadJson } from './helpers/loadingHelper.js';
import { cafeDrinksUrl, cafeImagesUrl } from './data/urls.js';
import Drink from './drawers/drink.js';

const drinksContainer = document.querySelector('.drinks');


initMobileMenu();
const map = initMap('company-location');
showDrinks();


async function showDrinks() {
    let drinks = await loadJson(cafeDrinksUrl);

    for (let drink of drinks) {
        let imageUrl = `${cafeImagesUrl}/${drink.image}`;

        let drinkDrawer = new Drink(imageUrl, drink.name, 'Try coffees from Keniya, Ethiopia', drink.prices);
        drinksContainer.append(drinkDrawer.toHtmlElement());
    }
}