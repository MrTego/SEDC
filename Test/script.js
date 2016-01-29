$(document).ready(function() {
	$("#input").submit(function(e) {
    e.preventDefault();
});

	$("#buttonSub").click(function() {
		
		var row = $("<tr>");
			$("#myTable > tbody").append(row);

		var adding = $("#name").val();
			row.append($("<td></td>").text(adding));
			adding = $("#email").val();
			row.append($("<td></td>").text(adding));
			adding = $("#mobile").val();
			row.append($("<td></td>").text(adding));
		var buttonRead = $("<input class='butt' id='read' type='button' value='Read'>");	
		var buttonUpdate = $("<input class='butt' id='update' type='button' value='Update'>");
		var buttonDelete = $("<input class='butt' id='delete' type='button' value='Delete'>");
		$("<td>").appendTo(row).append(buttonRead).append(buttonUpdate).append(buttonDelete);
			$("#name").val("");
			$("#email").val("");
			$("#mobile").val("");	 
		// Delete Button
		$(buttonDelete).click(function() {
			$(this).closest("tr").find("td").remove();
		});
		// Read Button
		$(buttonRead).click(function(){
			$("#readS").addClass("read");

		var readSection = $(this).closest("tr").find("td:eq(0)").text();
		var readSectionTwo = $(this).closest("tr").find("td:eq(1)").text();
		var readSectionThree = $(this).closest("tr").find("td:eq(2)").text();	
			$("#readS").html("Full Name: "  + readSection  + "<br>" + "Email Address: " + readSectionTwo + "<br>" + "Mobile Number: " + readSectionThree +"<br>");
			$("#readS").append("<input class='butt' id='close' type='button' value='Close'>");

		$("#close").click(function(){
			$("#readS").empty().removeClass("read");
		});	
		});	
		// Update Button
		$(buttonUpdate).click(function(){
			if ($(this).val() === "Update"){
         		$(this).val("Save");
         	var readSection = $(this).closest("tr").find("td:eq(0)").text();
			var readSectionTwo = $(this).closest("tr").find("td:eq(1)").text();
			var readSectionThree = $(this).closest("tr").find("td:eq(2)").text();
			var nameEdite = $("<input id='newName' type='text' name='Edite Name'>").val(readSection);
			var emailEdite = $("<input  id='newEmail' type='email' name='Edite Email'>").val(readSectionTwo);
			var mobileEdite = $("<input id='newNumber' type='number' name='Edite Mobile'>").val(readSectionThree);
				$(this).closest("tr").find("td:eq(0)").html(nameEdite);
				$(this).closest("tr").find("td:eq(1)").html(emailEdite);
				$(this).closest("tr").find("td:eq(2)").html(mobileEdite);
    		} else if ($(this).val() === "Save"){
        		
        	var newNa = $("#newName").val();
        	var newEm = $("#newEmail").val();
        	var newMob = $("#newNumber").val();
        		$(this).closest("tr").find("td:eq(0)").html(newNa);
        		$(this).closest("tr").find("td:eq(1)").html(newEm);
        		$(this).closest("tr").find("td:eq(2)").html(newMob);
        		$(this).val("Update");
        	 }
		});
	});		
});