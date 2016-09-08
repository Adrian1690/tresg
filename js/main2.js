
var windowW = $(window).width();
    var intro = $('#generations_section');
        //var third = $('#advertisement_section');

if(windowW > 600){
    var images = ['primera_vista_fondo1.jpg','primera_vista_fondo3.jpg','primera_vista_fondo2.jpg'];
    //intro.css('background-image','url(img/primera_vista_fondo1.jpg)');
}else{
    var images = ['primera_vista_fondo1_mobile.png','primera_vista_fondo3_mobile.png','primera_vista_fondo2_mobile.png'];
    
    intro.removeClass();
    
    intro.css('background-repeat','no-repeat');
    intro.css('height','100%');
    intro.css('background-size','100% 100%');
    intro.css('background-position','center');
}

$('.subir a ul').hover(
    
    function() {
        $('.subir a ul li img').attr('src', 'img/flecha_subir_gris.png');
    }, function() {
        $('.subir a ul li img').attr('src', 'img/flecha_subir.png');
    }
);

$('#cocteleria_section .content-b .container_cocteles ul li').hover(function(){
    //console.log('cocteles');

    $(this).find('.name').toggleClass("hovered");
    $(this).find('a.wow').toggleClass("scale1-08");
});

$('#cocteleria_section .content-b .container_cocteles ul li a.wow').click(function(){
    
    //$(this).parent().find('a:nth-child(2)');
    //alert('coctel');
    console.log($(this).parent().find('a:nth-child(2)'));
    $(this).parent().find('a:nth-child(2)').trigger('click');
});


$('#header_desktop .menu aside nav li a').hover(function(){
    console.log('hover nav');
    //console.log($(this).children());
    
    $(this).find('.icon_menu').toggleClass("hovered");
    $(this).find('span').toggleClass("font-bold");
});

$('body').on('click', '.degeneracion', function(event) {


    event.preventDefault();
    $('.DamaFade').fadeOut( "slow", function() {
        $('.la_dama').removeClass('active');
        $('.degeneracion').addClass('active');
        $('.GeneracionFade').fadeIn('fast');

        $('.imgfull_generacion').css('background-image','url(img/segunda_vista_imagen_responsive.png)');
    });

});


$('body').on('click', '.la_dama', function(event) {
    
    event.preventDefault();
    $('.GeneracionFade').fadeOut( "slow", function() {
        $('.DamaFade').fadeIn('fast');
        $('.degeneracion').removeClass('active');
        $('.la_dama').addClass('active');

        $('.imgfull_generacion').css('background-image','url(img/la_dama_responsive.png)');
    });

});

$(document).ready(function () {
    
    $('#formulario').submit(function(e){

        e.preventDefault();

        $.ajax({
            url:"mail.php",  
            method: "POST",
            data: { 
                nombre  : $('#nombre').val(),
                correo  : $('#correo').val(),
                telefono: $('#telefono').val(),
                mensaje : $('#mensaje').val()
            },
            success:function(data) {
              alert(data); 
              $('#alert_mail').fadeIn();
            }
        });

    });

    $('#corporativo').hover(
    
        function() {
                $('#adorno_regalo1').show();
                $('#adorno_regalo2').hide();//verde    
        }, function() {
            if( $(this).hasClass('active') ){
                $('#adorno_regalo1').show();
                $('#adorno_regalo2').hide();
            }else{
                $('#adorno_regalo1').hide();
                $('#adorno_regalo2').show();    
            }
            
        }
    );

    $('.regalos_gallery,#corporativo').click(function(e){
        e.preventDefault();
        $('.regalos_gallery,#corporativo').removeClass('active');
        $(this).addClass('active');

        if($(this).attr('id') == 'corporativo'){
            $('#adorno_regalo1').show();
            $('#adorno_regalo2').hide();
        }else{
            $('#adorno_regalo1').hide();
            $('#adorno_regalo2').show();    
        }
        
        

        var namer = $(this).attr('namer');
        var descp = $(this).attr('descripr');

        $('#container_regalos').fadeOut('400', function() {
             $('#container_regalos img').attr('src','img/regalos/' + namer + '.png');
             $('#container_regalos #descripcion').text(descp);

             $('#container_regalos').fadeIn(400);
    });

           

    });

    $(".container_piscos ul li a").tosrus({
        wrapper: {
            classes: "main-warpper",
        },
        infinite : true,
        buttons : {
            prev : true,
            next : true,
            close: true
        }
    });

    $(".container_cremas ul li a").tosrus({
        wrapper: {
            classes: "main-warpper"
        },
        infinite : true,
        buttons : {
            prev : true,
            next : true,
            close: true
        }
    });


    $(".container_cocteles ul li a").tosrus({
        wrapper: {
            classes: "main-warpper-coctel"
        },
        infinite : true,
        buttons : {
            prev : true,
            next : true,
            close: true
        }
    });
});








$(window).load(function() {

    // will first fade out the loading animation
    $("#imagen-load").fadeOut("slow");

    // will fade out the whole DIV that covers the website.

    $(".cargadorGlobal").delay(1000).fadeOut("slow");
    new WOW().init();
    $('#vista_seleccion').fadeIn();
    $('#generations_section').css({display:"block"});
    $('#generations_section2').css({display:"block"});
    $('#advertisement_section').css({display:"block"});
    $('#products_section').css({display:"block"});
    $('#cocteleria_section').css({display:"block"});
    $('#regalos_section').css({display:"block"});
    $('#contenedor_bottom').css({display:"block"});

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay : false,
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





$.fn.scrollStopped = function(callback) {
  var that = this, $this = $(that);
  $this.scroll(function(ev) {
    clearTimeout($this.data('scrollTimeout'));
    $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
  });
};

$(window).scrollStopped(function(ev){

    var counter = 0;
    var myInterval = setInterval(function () {
        ++counter;
        if(counter = 4){
            $('.desktop_header').css({opacity: 1}); 
            console.log('counter');   
            clearInterval(myInterval);
        }
    }, 1000);
            
});



$(window).scroll(function(){

    var fromtop = $(document).scrollTop();       // pixels from top of screen
    $('.desktop_header').css({opacity: 100-fromtop}); // use a better formula for better fading


});


//new WOW().init();
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
    
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);

        return false;
    });
    

    function resizeBotella(){
        var windowH = $(window).height();
        $('#botella_pisco').css('height', windowH * 0.92);    
    }
    $(window).resize(resizeBotella);
    resizeBotella();    

});


$('.si').on('click', function(event) {

    $('#vista_seleccion').fadeOut('slow', function() {
        $("body").css({"overflow-y":"auto"});
        var i = 0;

        /*setInterval(function(){

            if (i == 1 || i == 2) {

                $('.intro').fadeOut( 1300);
                $('.intro-slogan').fadeOut( 1300);

            }else{
                $('.intro').fadeIn( 1300);
                $('.intro-slogan').fadeIn( 1300);
            };

            
            intro.css('background-image','url(img/' + images[i ++] +')');
            
            if (i == images.length ) {
                i = 0;
            };
            
        },6000);
        */
        event.preventDefault();

    });

    /* Act on the event */
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




