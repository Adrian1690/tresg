

$('body').on('click', '#degeneracion', function(event) {


    event.preventDefault();
     $('.DamaFade').fadeOut( "slow", function() {
        $('.GeneracionFade').fadeIn('fast');
    });

});


$('body').on('click', '#la_dama', function(event) {


    event.preventDefault();
    $('.GeneracionFade').fadeOut( "slow", function() {
        $('.DamaFade').fadeIn('fast');
    });
});



$(document).ready(function () {
    $(".container_piscos ul li a").tosrus({
        wrapper: {
            classes: "main-warpper"
        }
    });

    $('.regalos_gallery,#corporativo').click(function(e){
        e.preventDefault();
        $('.regalos_gallery,#corporativo').removeClass('active');
        $(this).addClass('active');

        var namer = $(this).attr('namer');
        var descp = $(this).attr('descripr');

        $('#container_regalos').fadeOut('400', function() {
             $('#container_regalos img').attr('src','img/regalos/' + namer + '.png');
             $('#container_regalos #descripcion').text(descp);

             $('#container_regalos').fadeIn(400);
    });

           

    });

    $(".container_cremas ul li a").tosrus({
        wrapper: {
            classes: "main-warpper"
        }
    });


    $(".container_cocteles ul li a").tosrus({
        wrapper: {
            classes: "main-warpper-coctel"
        }
    });
});








$(document).ready(function() {




    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay : true,
        items : 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});









//BtnResponsive
var btn_menu_open = $('.btn_menu');
var btn_menu_close = $('.close_menu');
var menu_list = $('#aside_desktop');


btn_menu_open.click(function(){

        if (menu_list.is(':visible')) {
            menu_list.animate({marginRight: '0'},'800','swing');
        }

        else {
            menu_list.animate({marginRight: '-100%'},'800','swing');
        }
});

btn_menu_close.click(function(){
    if (menu_list.is(':visible')) {
         menu_list.animate({marginRight: '-100%'},'800','swing');
    }

    else {
        menu_list.animate({marginRight: '0'},'800','swing');
    }
});


//BtnResponsive
var btn_menu_open_resp = $('.btn_menu_responsive');
var menu_list_Resp = $('#menu_respond');


btn_menu_open_resp.click(function(){

        if (menu_list_Resp.is(':visible')) {
            menu_list_Resp.slideUp();
        }

        else {
            menu_list_Resp.slideDown();
        }
});








$(window).scroll(function(){


    var fromtop = $(document).scrollTop();       // pixels from top of screen
    $('.desktop_header').css({opacity: 100-fromtop}); // use a better formula for better fading


});


new WOW().init();
$(document).ready(function(){

    var fromtop = $(document).scrollTop();       // pixels from top of screen
    $('.desktop_header').css({opacity: 100-fromtop}); // use a better formula for better fading
});


linkInterno = $('nav li a[href^="#"]');
linkInterno.on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(href).offset().top }, 'slow');
    $('.btn_menu_responsive').trigger('click');
});






//Preloader
$(document).ready(function(){
    //eliminamos el scroll de la pagina
   // $("body").css({"overflow-y":"hidden"});
    //guardamos en una variable el alto del que tiene tu browser que no es lo mismo que del DOM
    var alto=$(window).height();
    //agregamos en el body un div que sera que ocupe toda la pantalla y se muestra encima de todo
    $("body").prepend("<div id='pre-load-web'><div id='imagen-load'><img id='logo_madera' src='img/logo_intro.png' alt=''/><img id='progreso' src='img/loader.png' /></div></div>");
        //le damos el alto
        $("#pre-load-web").css({height:alto+"px"});

    $("#imagen-load").css({"margin-top":(alto/2)-100+"px"});
    $("#vista_seleccion .content").css({"margin-top":(alto/2)-150+"px"});
});

$(document).ready(function(){
    $("#pre-load-web").fadeOut(500,function() {
        $(this).remove();
    });

    var i = 0;

    var windowW = $(window).width();
    var intro = $('#generations_section');

    if(windowW > 480){
        var images = ['primera_vista_fondo1.jpg','primera_vista_fondo2.jpg','primera_vista_fondo3.jpg'];
        intro.css('background-image','url(img/primera_vista_fondo1.jpg)');
    }else{
        var images = ['primera_vista_fondo1_mobile.jpg','primera_vista_fondo2_mobile.jpg','primera_vista_fondo3_mobile.jpg'];
        intro.css('background-image','url(img/primera_vista_fondo1_mobile.jpg)');
        intro.css('background-repeat','no-repeat');
        intro.css('background-size','contain');
        intro.css('background-position','center');
    }
    

    setInterval(function(){

        if (i == 1 || i == 2) {

            $('.intro').fadeOut( 1300);
            $('.intro-slogan').fadeOut( 1300);

        }else{
            $('.intro').fadeIn( 1300);
            $('.intro-slogan').fadeIn( 1300);
        };

        intro.css('background-image','url(img/' + images[i ++] +')');
        if(windowW < 480) {
            //intro.css('background-size','100% auto');
            intro.css('background-repeat','no-repeat');
            intro.css('background-size','contain');
            intro.css('background-position','center');


            //alert('asdas');
        }
        if (i == images.length ) {
            i = 0;
        };
        
    },4000);
    
    var windowH = $(window).height();
    $('#botella_pisco').css('height', windowH * 0.9);

});







// $('.cocteles li ').click(function(event) {
    
//     var selector = $(this).children('a').attr('href');

//     console.log(selector);

//     $(selector).find('.maincontent').children('.img-service').addClass('animated');


// });




/* detect touch */
if("ontouchstart" in window){
    document.documentElement.className = document.documentElement.className + " touch";
}
if(!$("html").hasClass("touch")){
    /* background fix */
    $(".parallax").css("background-attachment", "fixed");
}

/* fix vertical when not overflow
 call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() > h){
            $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}

$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax") && !$("html").hasClass("touch")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}

$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

/* set parallax background-position */
function parallaxPosition(e){
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function(i){
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        // only when in range
        if(bottomWindow > top && topWindow < bottom){
            var imgW = path.data("resized-imgW");
            var imgH = path.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = - imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var orizontalPosition = path.attr("data-oriz-pos");
            orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
            $(this).css("background-position", orizontalPosition + " " + value + "px");
        }
    });
}
if(!$("html").hasClass("touch")){
    $(window).resize(parallaxPosition);
    //$(window).focus(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
}




