const NavSlide = () => {
    const menuBtn = document.querySelector('.menu-btn'); //Boton Hamburguesa
    const nav = document.querySelector('.nav-links'); //Toda la barra de Navegacion
    const navLinks = document.querySelectorAll('.nav-links'); //Para la animacion de los links
    const navSection = document.querySelector('.nav-links'); //Cerrar la barra de navegacion con los liks
    const socialMedia = document.querySelector('.Social-Mobile'); //Hacer que ciere la Navegacion

    //Activar Barra de Navegacion
    menuBtn.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Hacer que los liks tambien Aparezcan
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = 'navLinksFade 0.5s ease fowards ${index / 7 +1.5}s';
            }
        });
    });

    //Hacer que se cierren la navegacion cuando se le da click a un link
    navSection.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        menuBtn.classList.toggle('open');
        menuOpen = false;
    });

    socialMedia.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
        menuBtn.classList.toggle('open');
        menuOpen = false;
    })

}
