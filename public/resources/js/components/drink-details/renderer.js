import getDrinkImageUrl from '../../helpers/drink-image.js';

export default function createDrinkDetails(model) {
    let container = document.createElement('div');
    container.className = 'drink-details';

    container.innerHTML = `
        <h2 class="drink-details__name">${model.name}</h2>
        
        <img src="${getDrinkImageUrl(model.image)}" class="drink-details__img">

        <div class="drink-details__description">${model.longDescription}</div>


        <div class="drink-details__prices-line">
            <table class="drink-details__sizes">
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Count</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="drink-size small">
                        <td>Small</td>
                        ${getPriceColumn(model.prices.smallSize)}
                        <td>
                            ${getPriceInput(model.prices.smallSize)}
                        </td>
                    </tr>

                    <tr class="drink-size medium">
                        <td>Medium</td>
                        ${getPriceColumn(model.prices.mediumSize)}
                        <td>
                            ${getPriceInput(model.prices.mediumSize)}
                        </td>
                    </tr>

                    <tr class="drink-size big">
                        <td>Big</td>
                        ${getPriceColumn(model.prices.bigSize)}
                        <td>
                            ${getPriceInput(model.prices.bigSize)}
                        </td>
                    </tr>
                    
                </tbody>
            </table>

            <div class="to-pay">
                <span class="to-pay__text">Total price:</span>
                <span class="to-pay__price price">0</span>
            </div>
            
        </div>
    `;

    return container;
}

function getPriceColumn(price) {
    if (price) return `<td class="price">${price}</td>`;
    return `<td class="price price_unset"></td>`;
}
function getPriceInput(price) {
    if(price) return `<input class="no-arrows-input drink-size__count" type="number" min="0" value="0">`;
    return `<input class="no-arrows-input drink-size__count" type="number" min="0" value="0" disabled>`;
}


{/* <button class="drink-details__buy-button">Buy</button> */ }

