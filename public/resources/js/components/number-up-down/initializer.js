
export default function initNumberUpDown(component) {
    const nPlusButton = component.querySelector('.number-up-down__plus');
    const nMinusButton = component.querySelector('.number-up-down__minus');
    const nValue = component.querySelector('.number-up-down__value');

    nPlusButton.addEventListener('click', () => {
        let curValue = +nValue.innerText;
        nValue.innerText = curValue + 1;
    });

    nMinusButton.addEventListener('click', () => {
        let curValue = +nValue.innerText;

        if (curValue <= 1) return;

        nValue.innerText = curValue - 1;
    });
}
