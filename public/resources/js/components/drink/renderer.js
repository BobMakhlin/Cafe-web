
export default function createDrink(drinkModel) {
    let drink = document.createElement('div');
    drink.className = 'drink';

    let drinkBigSize = drinkModel.prices.bigSize ? `$${drinkModel.prices.bigSize}` : '-';
    let drinkMediumSize = drinkModel.prices.mediumSize ? `$${drinkModel.prices.mediumSize}` : '-';
    let drinkSmallSize = drinkModel.prices.smallSize ? `$${drinkModel.prices.smallSize}` : '-';

    drinkModel.image.className = 'drink__img';
    drink.append(drinkModel.image);

    drink.innerHTML += `
        <div class="drink__info-block">
            <p class="drink__name">${drinkModel.name}</p>
            <p class="drink__short-description">${drinkModel.description}</p>
        </div>

        <hr>

        <table class="drink-prices">
            <tr>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price-block__img small">
                </th>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price-block__img medium">
                </th>
                <th>
                    <img src="resources/images/cups/cup.png" alt=""
                        class="drink-price-block__img big">
                </th>
            </tr>

            <tr>
                <td>
                    <p class="drink-price-block__text">${drinkSmallSize}</p>
                </td>
                <td>
                    <p class="drink-price-block__text">${drinkMediumSize}</p>
                </td>
                <td>
                    <p class="drink-price-block__text">${drinkBigSize}</p>
                </td>
            <tr>
        </table>
    `;

    drink.addEventListener('click', event => {
        window.location.href = `/catalog/${drinkModel.id}`;
    });

    return drink;
}
