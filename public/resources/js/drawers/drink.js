import { loadImage } from '../helpers/loadingHelper.js';

export default class Drink {
    constructor(id, image, name, description, prices) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.prices = prices;
    }

    async toHtmlElement() {
        let drink = document.createElement('div');
        drink.className = 'drink';

        let drinkBigSize = this.prices.bigSize ? `$${this.prices.bigSize}` : '-';
        let drinkMediumSize = this.prices.mediumSize ? `$${this.prices.mediumSize}` : '-';
        let drinkSmallSize = this.prices.smallSize ? `$${this.prices.smallSize}` : '-';

        let drinkImage = await loadImage(this.image);
        drinkImage.className = 'drink__img';
        drink.append(drinkImage);

        drink.innerHTML += `
            <div class="drink__info-block">
                <p class="drink__name">${this.name}</p>
                <p class="drink__short-description">${this.description}</p>
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

        drink.addEventListener('click', this.onDrinkClicked.bind(this));

        return drink;
    }

    async onDrinkClicked(event) {
        window.location.href = `/catalog/${this.id}`;
    }
}
