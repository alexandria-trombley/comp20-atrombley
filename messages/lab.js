function hello() {
	
var myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function() {
	if(myRequest.readyState == 4 && myRequest.status == 200) {
		var data = JSON.parse(myRequest.responseText);
		document.write(data);
	}
}

myRequest.open("GET", "data.json", true);
myRequest.send();

}


/*	var jsonData;
	function reqListener() {
		jsonData = JSON.parse(this.responseText);
	} 

	var myRequest = new XMLHttpRequest();
	myRequest.onload = reqListener;
	myRequest.open("get", 'data.json', true); 
console.log(myRequest);
	
	
} */

	
	
		


