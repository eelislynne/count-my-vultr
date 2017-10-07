window.onload = function() {
	$(".active").each(function() {
		var c = $(this).children();
		
		c.each(function() {
			
			if (c.prop("tagName").toLowerCase() == "a") {
				var text = c.text();
				if (text.toLowerCase().includes("instances")) {
					c.text(c.text() + " (" + $(".tablesecondline").length + ")");
				}
			}
	    });
	
	});
}