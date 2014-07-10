var info = [];

var json;

//refresh for weather. Add a refresh button that runs this funstion, top right
var refresh = function() {
	//create object to store all information here to easily display AND save to local storage- Include ID

	var json = JSON.parse(this.responseText);
	var data = json.current_observation;

	// var myObj = {
	// cityState : data.display_location.full,
	// currentTemp : data.temperature_string,
	// heatIndex : data.heat_index_string,
	// weather : data.weather,
	// icon : data.icon_url
	// };

	var cityState = data.display_location.full;
	var currentTemp = data.temperature_string;
	var heatIndex = data.heat_index_string;
	var weather = data.weather;
	var icon = data.icon_url;
	
	//check if varibles are running. They are
	console.log(cityState);
	console.log(currentTemp);
	console.log(heatIndex);
	console.log(weather);
	console.log(icon);
	
	//create row to push data in to.
	var row = Ti.UI.createTableViewRow({
		height : '100dp',
		location : cityState,
		temp : currentTemp,
		heat : heatIndex,
		weather : weather,
		icon : icon
	});

	//check row, can not reach inside yet.
	console.log(row);
	//Ti.API.debug(cityState);
	// Ti.API.debug(currentTemp);
	// Ti.API.debug(heatIndex);
	// Ti.API.debug(weather);
	// Ti.API.debug(icon);
	//console.log(myObj);]

};

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

console.log(xhr);

exports.refresh = refresh; 