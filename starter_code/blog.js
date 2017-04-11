$(document).ready(function() {
	
	$("#categories").hover(function() {

		$(".drop-content").slideToggle();

		console.log("hello");

	});

	$(".hamburger").click(menu);

	function menu() {
		$("nav").slideToggle();
	}
	
	console.log("ready!");
});