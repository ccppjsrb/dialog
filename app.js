$(function(){
	$("a").on("click", function(){
		var href = $(this).attr("href");
		$("#dialog").dialog({
			show: "fade",
			hide: "fade",
			title: "title",
			modal: true,
			buttons:{
				"yes":function(){
					$(this).dialog("close");
					window.location.href = href;
				}
				, "no":function(){
					$(this).dialog("close");
				}
			}
		});
		return false;
	});
});
