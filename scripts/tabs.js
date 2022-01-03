$(document).ready(function () {
	$('#tabs li').click(function () {
		id = $(this).attr('id');
		
		$('#tabs #'+id).addClass("active");
		$('#tabs li:not(#' + id +')').removeClass("active");

		$('#cont #cont-' + id).show();
		$('#cont div:not(#cont-' + id +')').hide();
	});
});