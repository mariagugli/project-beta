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

//MENÚ HAMBURGUESA//

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


// Botón timeline //

const btnTimeline = document.querySelectorAll('.btn__timeline');

btnTimeline.forEach(btnYear => {
    btnYear.addEventListener('click', () => {
        document.querySelector('.btn__timeline--select')?.classList.remove('.btn__timeline--select');
        btnYear.classList.add('.btn__timeline--select');
    });
});


/*function toggleHistoria2020() {
    historia2018.classList.toggle('none');
    historia2021.classList.toggle('none');
    historia2023.classList.toggle('none');
    historia2020.classList.toggle('block');

}
function toggleHistoria2021() {
    historia2018.classList.toggle('none');
    historia2023.classList.toggle('none');
    historia2020.classList.toggle('none');
    historia2021.classList.toggle('block');

}

function toggleHistoria2023() {
    historia2018.classList.toggle('none');
    historia2020.classList.toggle('none');
    historia2021.classList.toggle('none');
    historia2023.classList.toggle('block');

}

function toggleHistoria2018() {
    historia2020.classList.toggle('none');
    historia2021.classList.toggle('none');
    historia2023.classList.toggle('none');
    historia2018.classList.toggle('block');

}


const historia2020 = document.querySelector('.historia__2020');
const historia2021 = document.querySelector('.historia__2021');
const historia2023 = document.querySelector('.historia__2023');
const historia2018 = document.querySelector('.historia__2018');

const btn2020 = document.querySelector('.btn__2020-js');
const btn2021 = document.querySelector('.btn__2021-js');
const btn2023 = document.querySelector('.btn__2023-js');
const btn2018 = document.querySelector('.btn__2018-js');

btn2020.addEventListener('click', toggleHistoria2020);
btn2021.addEventListener('click', toggleHistoria2021);
btn2023.addEventListener('click', toggleHistoria2023);
btn2018.addEventListener('click', toggleHistoria2018);
*/


