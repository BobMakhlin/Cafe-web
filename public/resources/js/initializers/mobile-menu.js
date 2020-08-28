const navToggle = document.querySelector('.mobile__nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

export default function initMobileMenu() {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('fa-times');
        mobileMenu.classList.toggle('mobile-menu_active')
    })
}
