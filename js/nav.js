/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var offset = $('#meuMenu').offset().top;
var $meuMenu = $('#meuMenu'); // guardar o elemento na memoria para melhorar performance
var $brand = $('#brand');
var $link = $('#link');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('navbar-fixed-top');
        $brand.removeClass('invisible');
        $link.addClass('navbar-right');
    } else {
        $meuMenu.removeClass('navbar-fixed-top');
        $brand.addClass('invisible');
        $link.removeClass('navbar-right');
    }
});

