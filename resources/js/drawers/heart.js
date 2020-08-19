import later from '../helpers/later.js';

export default class Heart {

    toHtmlElement() {
        let heart = document.createElement('div');
        heart.className = 'heart';

        heart.innerHTML = `
            <div class="heart__outer">
                <img class="heart__inner heart__inner_non-active" src="resources/images/heart/heart-inner.png" alt="">
            </div>
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
