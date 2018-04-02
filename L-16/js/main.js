
var main = function() { 
  /* Открытие меню */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: '0' 
    }, 500);
  });
  /* Закрытие меню */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: '-28.5rem' 
    }, 500);
  });
};

$(document).ready(main); 