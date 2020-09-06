
export default function initDrink(component, model) {
    component.addEventListener('click', () => {
        window.location.href = `/catalog/${model._id}`;
    });
}
