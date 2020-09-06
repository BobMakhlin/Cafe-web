import getDrinkImageUrl from '../../helpers/drink-image.js';

import createDrinkSizeSelector from '../drink-size-selector/renderer.js';
import initDrinkSizeSelector from '../drink-size-selector/initializer.js';

import createNumberUpDown from '../number-up-down/renderer.js';
import initNumberUpDown from '../number-up-down/initializer.js';


export default function createDrinkDetails(model) {
    let container = document.createElement('div');
    container.className = 'drink-details';


    container.insertAdjacentHTML('beforeend', `
        <h2 class="drink-details__name">${model.name}</h2>
    `);

    let nDrinkSizesLine = getDrinkSizesLine(model);
    container.append(nDrinkSizesLine);

    container.insertAdjacentHTML('beforeend', `
        <div class="drink-details__description">${model.longDescription}</div>
    `);

    let nDrinkDetailsLine = getDrinkPriceLine(model);
    container.append(nDrinkDetailsLine);

    container.insertAdjacentHTML('beforeend', `
        <button class="drink-details__buy-button">Buy</button>
    `);
    

    return container;
}

function getDrinkSizesLine(model) {
    let nSizesLine = document.createElement('div');
    nSizesLine.id = 'drink-details__sizes-line';
    nSizesLine.className = 'drink-details__line';


    nSizesLine.innerHTML = `
        <img src="${getDrinkImageUrl(model.image)}" class="drink-details__img">
    `;

    let nSizesSelector = createDrinkSizeSelector(model.prices);
    initDrinkSizeSelector(nSizesSelector);
    nSizesLine.append(nSizesSelector);


    return nSizesLine;
}
function getDrinkPriceLine(model) {
    let nDetailsLine = document.createElement('div');
    nDetailsLine.className = 'drink-details__line';
    nDetailsLine.id = 'drink-details__price-line';

    let nNumberUpDown = createNumberUpDown();
    initNumberUpDown(nNumberUpDown);
    nDetailsLine.append(nNumberUpDown);
    
    nDetailsLine.insertAdjacentHTML('beforeend', `
        <p class="drink-details__total-price price">${model.prices.smallSize}</p>
    `);

    return nDetailsLine;
}
