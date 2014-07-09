//API Variables
var json;

//Remote info and request
var remoteError = function() {
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	//Ti.API.debug("Error: " + e.error);
	alert("There was a problem pulling remote data.");
};

exports.refresh = function(){
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", "http://api.wunderground.com/api/ec864c4dc772cc90/conditions/q/IA/Garner.json");
	xhr.send();
	xhr.onload = function(){
		remoteError();
		if (xhr.status === 200) {
			//create object to store all information here to easily display AND save to local storage- Include ID
			var json = JSON.parse(this.responseText);
			var data = json.current_observation;
			var simpleForcast = json.forcast.simpleforcast;
			var myObj = {
				cityState : data.display_location.full,
				currentTemp : data.temperature_string,
				heatIndex : data.heat_index_string
			};
			console.log(myObj);
		}
	};
};
