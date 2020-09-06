import { cafeImagesUrl } from '../data/urls.js';

export default function getDrinkImageUrl(imageName) {
    return `${cafeImagesUrl}/${imageName}`;
}
