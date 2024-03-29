function parse() {

// create new XMLHttpRequest object
var myRequest = new XMLHttpRequest();

// when the XMLHttp object is ready to go, parses the JSON content
myRequest.onreadystatechange = function() {
	if(myRequest.readyState == 4 && myRequest.status == 200) {
		var data = JSON.parse(myRequest.responseText);
		print(data);
		
	// if the document is not found or returned properly, prints error message
	} else {
		document.getElementById("messages").innerHTML = 'oops...something went wrong';
	}
} 

myRequest.open("GET", "dat.json", true);
myRequest.send();

}

// prints data to the screen 
function print(data) {

	var out = " ";
	
	// loops through the objects in the array, as created in JSON,
	// concatonates these objects appropriately
	for (i = 0; i < data.length; i++) {
		out += '<span class = "mess">' + data[i].content + "  " + '</span>' + "  " + '<span class = "name">' + data[i].username + '</span>' + '<div id = "break">' + '<br>' + '<br>' + '</div>';
		
		// applies the concatonated strings to the HTML document
		document.getElementById("messages").innerHTML = out;

	}	
}


	
	
		


