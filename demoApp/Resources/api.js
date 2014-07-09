//requires sqlite module
var SQLite = require('SQLite');

var myObj = {};
// cityState : data.display_location.full,
// currentTemp : data.temperature_string,
// heatIndex : data.heat_index_string,
// weather : data.weather,
// icon : data.icon_url
//};
//refresh for weather. Add a refresh button that runs this funstion, top right
var refresh = function(myObj) {
	//create object to store all information here to easily display AND save to local storage- Include ID
	var json = JSON.parse(this.responseText);
	var data = json.current_observation;

	myObj.cityState = data.display_location.full;
	myObj.currentTemp = data.temperature_string;
	myObj.heatIndex = data.heat_index_string;
	myObj.weather = data.weather;
	myObj.icon = data.icon_url;

	//Ti.API.debug(cityState);
	// Ti.API.debug(currentTemp);
	// Ti.API.debug(heatIndex);
	// Ti.API.debug(weather);
	// Ti.API.debug(icon);
	//console.log(myObj);
	
	return myObj;
};

//refresh();

console.log(myObj);

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

exports.myObj = refresh; 