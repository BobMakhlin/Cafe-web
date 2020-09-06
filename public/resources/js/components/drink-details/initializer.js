
export default function initDrinkDetails(component) {
    const nPlusButton = component.querySelector('.number-up-down__plus');
    const nMinusButton = component.querySelector('.number-up-down__minus');
    const nValue = component.querySelector('.number-up-down__value');

    const nDrinkSizesSelector = component.querySelector('.drink-sizes');
    const nDrinkPrice = component.querySelector('.drink-details__total-price');


    const updateDrinkPriceFn = () => {
        let count = +nValue.innerText;
        let price = +nDrinkSizesSelector.getAttribute('selected-price');
        let totalPrice = price * count;
        nDrinkPrice.innerText = totalPrice.toFixed(1);
    }

    nPlusButton.addEventListener('click', updateDrinkPriceFn);
    nMinusButton.addEventListener('click', updateDrinkPriceFn);


    const nDrinkSizes = component.querySelectorAll('.drink-size');

    for (let item of nDrinkSizes) {
        item.addEventListener('click', updateDrinkPriceFn);
    }
}

