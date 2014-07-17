var SQLite = require('SQLite');

//refresh for weather. Add a refresh button that runs this funstion, top right
var refresh = function(myObj) {
	//create object to store all information here to easily display AND save to local storage- Include ID

	var json = JSON.parse(this.responseText);
	var data = json.current_observation;

	var myObj = {
		cityState : data.display_location.full,
		currentTemp : data.temperature_string,
		//heatIndex : data.heat_index_string,
		weather : data.weather,
		icon : data.icon_url
	};

	SQLite.save(myObj);
};

//create this row and labels in app.js, within a function. call for the object with remote data to that function

//create row to push data in to.

//Remote info and request
var remoteError = function() {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	//Ti.API.debug("Error: " + e.error);
	alert("There was a problem pulling remote data.");
};

var xhr = Ti.Network.createHTTPClient({
	onload : refresh,
	onerror : remoteError,
	timeout : 5000
});
xhr.open("GET", "http://api.wunderground.com/api/ec864c4dc772cc90/conditions/q/IA/Garner.json");
xhr.send(); 