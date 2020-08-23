import Drink from './drawers/drink.js';
import { fakeDrinksData } from './data/fake-data.js';
import Heart from './drawers/heart.js';
import initMobileMenu from './initializers/mobile-menu.js';
import initMap from './initializers/map.js';

const drinks = document.querySelector('.drinks');

initMobileMenu();
const map = initMap('company-location');
showPopularDrinks();


function showPopularDrinks() {
    for (let drinkInfo of fakeDrinksData) {
        let drinkDrawer = new Drink(drinkInfo.image, drinkInfo.name, drinkInfo.price, drinkInfo.description);
        let heartDrawer = new Heart();

        let drinkDiv = drinkDrawer.toHtmlElement();
        let heartDiv = heartDrawer.toHtmlElement();
        drinkDiv.prepend(heartDiv);

        drinks.append(drinkDiv);
    }
}
