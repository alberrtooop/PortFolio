 //evento que se carga antes que imagenes y cualquie otra cosa 
 addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector(".btn_menu")
    if (btn_menu) {
        //cuando haces clic
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            //Muestra el .menu_itens que esta desplazado
            menu_items.classList.toggle('show')

        });
    }
});

$('#scrollTopBtn').click(function () {
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('#scrollTopBtn').slideDown(300);
    } else {
        $('#scrollTopBtn').slideUp(300);
    }
});


$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".menu").css({ "top": "0", "background": "transparent" });
        } else {
            $(".menu").css({ "background": "rgba(103, 176, 209, 0.8)" });
        }
    });
});