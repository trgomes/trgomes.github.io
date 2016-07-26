/* 
    =============NAV TOPO=============
    Created on : 14/07/2016, 21:32:57
    Author     : Thiago Gomes
    ==================================
*/

var offset = $('#menu').offset().top;
// guardar o elemento na memoria para melhorar performance
var $menuTopo = $('#menuTopo'); 
var $menu = $('#menu');

$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop())
    {        
        $menuTopo.removeClass('invisible');        
        $menu.addClass('invisible');
    } 
    else
    {
        $menuTopo.addClass('invisible');        
        $menu.removeClass('invisible');
    }
});