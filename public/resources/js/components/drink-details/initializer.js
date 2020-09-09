
export default function initDrinkDetails(component) {
    const nSmallPrice = component.querySelector('.drink-size.small .price');
    const nSmallCountInput = component.querySelector('.drink-size.small .drink-size__count')

    const nMediumPrice = component.querySelector('.drink-size.medium .price');
    const nMediumCountInput = component.querySelector('.drink-size.medium .drink-size__count')

    const nBigPrice = component.querySelector('.drink-size.big .price');
    const nBigCountInput = component.querySelector('.drink-size.big .drink-size__count');

    const nTotalPrice = component.querySelector('.to-pay__price');


    const updateTotalPrice = () => {
        let smallDrinkPrice = +nSmallPrice.innerText || 0;
        let smallDrinksCount = nSmallCountInput.value;

        let mediumDrinkPrice = +nMediumPrice.innerText || 0;
        let mediumDrinksCount = nMediumCountInput.value;

        let bigDrinkPrice = +nBigPrice.innerText || 0;
        let bigDrinksCount = nBigCountInput.value;

        let totalPrice =
            smallDrinkPrice * smallDrinksCount
            + mediumDrinkPrice * mediumDrinksCount
            + bigDrinkPrice * bigDrinksCount;

        nTotalPrice.innerText = Math.round(totalPrice * 100) / 100;
    }


    nSmallCountInput.addEventListener('input', updateTotalPrice);
    nMediumCountInput.addEventListener('input', updateTotalPrice);
    nBigCountInput.addEventListener('input', updateTotalPrice);
}

