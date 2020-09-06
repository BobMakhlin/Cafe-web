
export default function initDrinkSizeSelector(component) {
    let drinkSizes = component.querySelectorAll('.drink-size');

    for (let item of drinkSizes) {
        item.addEventListener('click', () => selectDrinkSize(component, item));
    }
}
function selectDrinkSize(component, target) {
    if (target.classList.contains('drink-size_disabled')) return;

    deselectActiveDrinkSize(component);
    target.classList.add('drink-size_active');


    let targetPriceParagraph = target.querySelector('.price');
    let targetPrice = +targetPriceParagraph.innerHTML;
    component.setAttribute('selected-price', targetPrice);
}
function deselectActiveDrinkSize(component) {
    let activeDrinkSize = component.querySelector('.drink-size_active');
    activeDrinkSize.classList.remove('drink-size_active');
}
