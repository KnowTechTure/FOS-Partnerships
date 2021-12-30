$(document).ready(function () {
	$('#tabs li').click(function () {
		id = $(this).attr('id');
/*
		switch (id) {
			case "chat":
				break;
			case "tasks":
				break;
		}
*/
		//alert(id);
		$('#'+id).addClass("active");
		$('li:not(#' + id +')').removeClass("active");
		$('#cont-' + id).show();
		$('#cont div:not(#cont-' + id +')').hide();

		//$('#cont div#js-' + id).animate({width: 'toggle'});
		//$('#cont div:not(#js-' + id + ')').animate({width: 'toggle'});
	});
});