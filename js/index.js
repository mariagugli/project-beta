/*function contrastTopbar () {

    const bgWhite = document.querySelectorAll ('.js-section-dark');
    const svgDark = document.querySelector('.js-dark-logo');

    const navMenu = document.querySelector('.topbar__nav');
    const burgerMenu = document.querySelector ('.topbar__menu__line');

    if(bgWhite === true) {
        svgDark.classList.toggle('hide');
        navMenu.classList.toggle('dark');
        burgerMenu.classList.toggle('dark');

    } else return
}


function changeWidthLogo () {
    let scroll = (window.pageXOffset / 5);
    let width = scroll;

    document.querySelector('.topbar__logo').style.width = width + '%';

}

window.addEventListener('scroll', () => {
    requestAnimationFrame(changeWidthLogo);
    document.querySelector('.topbar').classList.toggle('flex-start');
}); */


//funcion que se lanza al hacer click
function toggleMenu() {
    menu.classList.toggle('hide');
}

//elemento que quiero modificar (ocultar o mostrar)
const menu = document.querySelector('.topbar__nav');


//elemento que dispara la acción
const btn = document.querySelector('.topbar__btn__menu');

btn.addEventListener('click', toggleMenu);

// Botón desplegable de explicación Subir //
function toggleFuncSubir() {
    pasosSubir.classList.toggle('block');
}

const pasosSubir = document.querySelector('.pasos__subir');

const btnSubir = document.querySelector('.btn__func__subir');

btnSubir.addEventListener('click', toggleFuncSubir);

// Botón desplegable de explicación Buscar //
function toggleFuncBuscar() {
    pasosBuscar.classList.toggle('block');
}

const pasosBuscar = document.querySelector('.pasos__buscar');

const btnBuscar = document.querySelector('.btn__func__buscar');

btnBuscar.addEventListener('click', toggleFuncBuscar);

