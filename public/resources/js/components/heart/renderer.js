import later from '../../helpers/later.js';

export default function createHeart() {
    let container = document.createElement('div');
    container.className = 'heart';

    container.innerHTML = `
        <span class="far fa-heart heart__outer">
        <span class="fas fa-heart heart__inner heart__inner_non-active">
    `;

    container.addEventListener('click', async (event) => {
        event.stopPropagation();

        let innerHeart = container.querySelector('.heart__inner');

        innerHeart.classList.add('heart__inner_active');
        await later(1000);
        innerHeart.classList.remove('heart__inner_active');
    })

    return container;
}
