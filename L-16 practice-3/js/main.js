
var main = function() {
var link =  $('.menu__link');
var link_close = $('.menu__link_active');
var menu = $('.menu');

  link.click(function() {
    link.toggleClass('menu__link_active');
    menu.toggleClass('menu_active');

  });

  link_close.click(function() {
    link.removeClass('menu__link_active');
    menu.removeClass('menu_active');
  });

};

$(document).ready(main); 