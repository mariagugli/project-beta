window.addEventListener("scroll", function(event) {
    let scroll = this.scrollY;
    if (scroll > 800) {
        document.querySelector('.topbar__logo').classList.remove('topbar--white');
        document.querySelector('.topbar__logo').classList.add('small__logo');

        document.querySelector('.topbar').classList.add('topbar__spacebtwn');
        document.querySelector('.topbar').classList.remove('topbar');

        document.querySelector('.topbar__spacebtwn').style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0) 100%)';
        document.querySelector('.movil__menu__subir').classList.remove('movil__menu--on');
        document.querySelector('.movil__menu__buscar').classList.remove('movil__menu--on');
    } else {
        document.querySelector('.topbar__logo').classList.remove('small__logo');
        document.querySelector('.topbar__logo').classList.add('topbar--white');

        document.querySelector('.topbar__spacebtwn').classList.add('topbar');
        document.querySelector('.topbar__spacebtwn').classList.remove('topbar__spacebtwn');
        
        document.querySelector('.topbar').style.background = 'none';

        document.querySelector('.movil__menu__subir').classList.add('movil__menu--on');
        document.querySelector('.movil__menu__buscar').classList.add('movil__menu--on');
       
    };
});

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

// BOTON ABRIR FORM ANUNCIO //

function toggleContactAd() {
    formAd.classList.toggle('block');
}

const formAd = document.querySelector('.section__pagead__form');

const btnContactAd = document.querySelector('.btn__contact--pagead');

btnContactAd.addEventListener('click', toggleContactAd);


