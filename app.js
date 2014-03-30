$(function(){
	$("#dialog").dialog({
		autoOpen: false,
		show: "fade",
		hide: "fade",
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
	$("a.alert").on("click", function(){
		var href = $(this).attr("href");
		$("#dialog").dialog({
			autoOpen: false,
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
		$("#dialog").dialog("open");
		return false;
	});
});
