import Drink from './drawers/drink.js';
import { fakeDrinksData } from './data/fake-data.js';
import Heart from './drawers/heart.js';
import { mapboxKey } from './data/keys.js';

const drinks = document.querySelector('.drinks');
const navToggle = document.querySelector('.mobile__nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

let map = null;


initDrinks();
initMap();
initMobileMenu();


function initDrinks() {
    for (let drinkInfo of fakeDrinksData) {
        let drinkDrawer = new Drink(drinkInfo.image, drinkInfo.name, drinkInfo.price, drinkInfo.description);
        let heartDrawer = new Heart();

        let drinkDiv = drinkDrawer.toHtmlElement();
        let heartDiv = heartDrawer.toHtmlElement();
        drinkDiv.prepend(heartDiv);

        drinks.append(drinkDiv);
    }
}
function initMap() {
    map = L.map('company-location').setView([40.745350, -74.012438], 10.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mapboxKey
    }).addTo(map);
}
function initMobileMenu() {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('fa-times');
        mobileMenu.classList.toggle('mobile-menu_active')
    })
}
