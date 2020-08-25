
export default class Drink {
    constructor(image, name, description, prices) {
        this.image = image;
        this.name = name;
        this.description = description;
        this.prices = prices;
    }

    toHtmlElement() {
        let drink = document.createElement('div');
        drink.className = 'drink';

        let drinkBigSize = this.prices.bigSize ? `$${this.prices.bigSize}` : '-';
        let drinkMediumSize = this.prices.mediumSize ? `$${this.prices.mediumSize}` : '-';
        let drinkSmallSize = this.prices.smallSize ? `$${this.prices.smallSize}` : '-';


        drink.innerHTML = `
            <img src="${this.image}" alt="" class="drink__img">

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

        return drink;
    }
}
