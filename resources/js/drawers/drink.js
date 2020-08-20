
export default class Drink {
    constructor(image, name, price, description) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    toHtmlElement() {
        let drink = document.createElement('div');
        drink.className = 'drink';

        drink.innerHTML = `
            <img src="${this.image}" alt="" class="drink__img">

            <div class="drink__info-block">
                <p class="drink__name">${this.name}</p>
                <p class="drink__price price">${this.price}</p>
            </div>

            <p class="drink__short-description">${this.description}</p>
        `;

        return drink;
    }
}
