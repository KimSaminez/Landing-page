function showButton() {
    let menuMobile = document.querySelector('.menu_mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open');
    }
}