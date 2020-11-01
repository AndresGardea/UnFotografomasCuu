var cerrar = document.getElementById('cerrar'), //Todos los elementos que pueden cerrar la barra de navegacion con solo hacer click
    menuBtn = document.getElementById('menuBtn'),
    nav = document.getElementById('nav_bar'),
    contador = 0;

function abrir() {
    if (contador == 0) {
        caja.classList.add('nav-active');
        contador = 1;
    } else {
        caja.classList.remove('nav-active');
        contador = 0;
    }
}

cerrar.addEventListener('click',abrir.true)