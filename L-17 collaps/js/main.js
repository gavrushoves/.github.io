
var main = function() {
var tab =  $('.tab');

  tab.click(function() {
    console.log('Клик по табу');
    var target = $(this).attr('data-target');
    console.log('Эта вкладка ведет к содержимому'+target);
		$('.tab-content').hide("slow");
		$('.'+target).show("slow");

  });
};
$(document).ready(main); 