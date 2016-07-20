/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var offset = $('#menu').offset().top;
var $menuTopo = $('#menuTopo'); // guardar o elemento na memoria para melhorar performance
var $menu = $('#menu'); // guardar o elemento na memoria para melhorar performance
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $menuTopo.removeClass('invisible');       
    } else {
        $menuTopo.addClass('invisible');        
    }
});

