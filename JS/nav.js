var menu      = document.querySelector('#menu');
var drawer    = document.querySelector('nav');
var oscurecer = document.querySelector('.oscurecer');

menu.addEventListener('click', function (e) {
    /*Abrir menu*/
    drawer.classList.toggle('open');

    /* Oscurecer contenido al abrir el menu */
    oscurecer.style.display = 'block';

    /*Evitar que se haga scroll*/
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    e.stopPropagation();
});
oscurecer.addEventListener('click', function () {
    /* Cerrar menu */
    drawer.classList.remove('open');

    /* Aclarar contenido al cerrar el menu */
    oscurecer.style.display = 'none';
    
    /*Activar scroll*/
    document.getElementsByTagName("html")[0].style.overflow = "auto";
});