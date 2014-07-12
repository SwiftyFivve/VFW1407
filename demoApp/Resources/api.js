var info = [];

var json;

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

	var locationLabel = Ti.UI.createLabel({
		text : myObj.cityState,
	});

	var tempLabel = Ti.UI.createLabel({
		text : myObj.currentTemp,
	});

	var weatherLabel = Ti.UI.createLabel({
		text : myObj.weather,
	});

	var iconLabel = Ti.UI.createLabel({
		text : myObj.icon,
	});
	
	var allLabels = [locationLabel, tempLabel, weatherLabel, iconLabel];
	for (i=0; i<allLabels; i++);
	
	var row = Ti.UI.createTableViewRow({
		text : allLabels[i]
	});
	
	console.log('line 43 ' + row.text[0]);
	
	console.log('line 45 ' + info[0]);
	
	info.push(row);
	table.setData(api.info);
};

//create this row and labels in app.js, within a function. call for the object with remote data to that function

//create row to push data in to.

// row.add(label);//Ti.API.debug(cityState);
// Ti.API.debug(currentTemp);
// Ti.API.debug(heatIndex);
// Ti.API.debug(weather);
// Ti.API.debug(icon);
//console.log(myObj);]
//return info;

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

exports.info = info;
