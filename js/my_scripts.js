$(document).ready(function(){
	//Shows and Hides project dropdown menu
	$("#projects-content").css("display", "none");
	$("#projects").hover(function(){
		$("#projects-content").css("display","block");
		$("#projects-content").hover(function(){
			$("#projects-content").css("display","block");
		},
		function(){
			$("#projects-content").css("display", "none");
		});
	},
	function(){
		$("#projects-content").css("display", "none");
	});
});
