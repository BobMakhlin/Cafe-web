import { loadImage } from '../../helpers/loadingHelper.js';

export default class DrinkModel {
    constructor(id, name, imageUrl, description, prices) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.prices = prices;
    }
    async init() {
        this.image = await loadImage(this.imageUrl);
    }
}
