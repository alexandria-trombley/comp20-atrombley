function hello() {

	var JavaScript = JSON.parse(open());
	document.write(JavaScript);
}

function open() {

	var myRequest = new XMLHttpRequest();	
	myRequest.open("GET", 'data.json', true);
	myRequest.send(null);

}
