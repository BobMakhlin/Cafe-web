
export default function createDrinkSizeSelector(prices) {
    let container = document.createElement('div');
    container.className = 'drink-sizes';
    container.setAttribute('selected-price', prices.smallSize);

    container.innerHTML = `
        <div class="drink-size drink-size_active small">
            <img src="/resources/images/cups/drink-details__cup.png" class="drink-size__img">
            <p class="drink-size__price price">${prices.smallSize}</p>
        </div>

        <div class="drink-size medium">
            <img src="/resources/images/cups/drink-details__cup.png" class="drink-size__img">
            <p class="drink-size__price price">${prices.mediumSize}</p>
        </div>

        <div class="drink-size big">
            <img src="/resources/images/cups/drink-details__cup.png" class="drink-size__img">
            <p class="drink-size__price price">${prices.bigSize}</p>
        </div>
    `;

    return container;
}
