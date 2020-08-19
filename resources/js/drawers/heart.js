import later from '../helpers/later.js';

export default class Heart {

    toHtmlElement() {
        let heart = document.createElement('div');
        heart.className = 'heart';

        heart.innerHTML = `
            <span class="far fa-heart heart__outer">
            <span class="fas fa-heart heart__inner heart__inner_non-active">
        `;

        heart.addEventListener('click', async () => {
            let innerHeart = heart.querySelector('.heart__inner');

            innerHeart.classList.add('heart__inner_active');
            await later(1000);
            innerHeart.classList.remove('heart__inner_active');
        })

        return heart;
    }

}
