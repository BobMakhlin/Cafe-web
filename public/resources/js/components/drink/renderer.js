import getDrinkImageUrl from '../../helpers/drink-image.js';

export default function createDrink(model) {
    let container = document.createElement('div');
    container.className = 'drink';

    container.innerHTML = `
        <img class="drink__img" src="${getDrinkImageUrl(model.image)}">

        <div class="drink__info-block">
            <p class="drink__name">${model.name}</p>
            <p class="drink__short-description">${model.shortDescription}</p>
        </div>

        <hr>

        <table class="drink-prices">
            <tr>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price__img small">
                </th>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price__img medium">
                </th>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price__img big">
                </th>
            </tr>

            <tr>
                <td>
                    ${getPriceParagraph(model.prices.smallSize)}
                </td>
                <td>
                    ${getPriceParagraph(model.prices.mediumSize)}
                </td>
                <td>
                    ${getPriceParagraph(model.prices.bigSize)}
                </td>
            <tr>
        </table>
    `;

    return container;
}

function getPriceParagraph(price) {
    if (price) return `<p class="drink-price__text price">${price}</p>`
    return `<p class="drink-price__text price price_unset"></p>` 
}
