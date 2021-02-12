'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	/*
	$(".project a").on("click", funtion(){
		e.preventDefault();
		console.log(idNumber);
	});

	*/
	$(".project details").click(projectClick)

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var idNumberURL = "http://localhost:3000/project/" + idNumber;
	console.log(idNumberURL);
	$.get(idNumberURL, callBackFn);
	//$.post(idNumberURL,  {"json":"json"}, callBackFn)
}

function projectClick(e){
	e.preventDefault();
	//$.get("/project/random",addProject);

}

function callBackFn(result){
	console.log(result);

	var projectDetail = '<img src = "' + result['image'] + '" + class="detailsImage">' + '<p>' + result['title']
	+ '</p>' + '<p><smail>' + result['date'] + '</small></p>' + '<p>' + result['summary'] + '</p>';

	//$("#1 .details").html(htmlDetail);
	//$("#boy").click(console.log("clicked"));
	$(".details").html(projectDetail);
	//$("#project-description").html(result['summary']);

}
