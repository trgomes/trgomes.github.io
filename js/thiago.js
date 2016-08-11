/*
 =============NAV TOPO=============
 Created on : 14/07/2016, 21:32:57
 Author     : Thiago Gomes
 ==================================
 */

$(function () {

    // Fixar menu ao mover o scroll
    var offset = $('#menu').offset().top;
    var $menuTopo = $('#menuTopo');
    var $menu = $('#menu');

    $(window).scroll(function(){
        if($(this).scrollTop() >= offset){
            $menuTopo.removeClass('invisible');
            $menu.addClass('invisible');
        }else{
            $menuTopo.addClass('invisible');
            $menu.removeClass('invisible');
        }
    });

    //Recolhe o menu ao clicar (mobile)
    $('.navbar-collapse a').click(function(){
      $('.navbar-collapse').collapse('hide');
    });

    // Transição suave ao clicar nos menus
    $(".smoothScroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1200);
    });

    // Animação logo
    $("#logo").mouseenter(function(){
      $("#logo").addClass('animated bounce');
    });

    $("#logo").mouseout(function(){
      $("#logo").removeClass('animated bounce');
    });
});
