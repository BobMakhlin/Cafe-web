
export default function createNumberUpDown() {
    let container = document.createElement('div');
    container.className = 'number-up-down';

    container.innerHTML = `
        <p class="number-up-down__text number-up-down__plus non-selectable">+</p>
        <p class="number-up-down__text number-up-down__value">1</p>
        <p class="number-up-down__text number-up-down__minus non-selectable">-</p>
    `;
    
    return container;
}
