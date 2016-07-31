/* 
 =============NAV TOPO=============
 Created on : 14/07/2016, 21:32:57
 Author     : Thiago Gomes
 ==================================
 */

$(function () {
    $(".smoothScroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1200);
    });
});

var offset = $('#menu').offset().top;
// guardar o elemento na memoria para melhorar performance
var $menuTopo = $('#menuTopo');
var $menu = $('#menu');

$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop())
    {
        $menuTopo.removeClass('invisible');
        $menu.addClass('invisible');
    } else
    {
        $menuTopo.addClass('invisible');
        $menu.removeClass('invisible');
    }

});