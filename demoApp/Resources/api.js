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
		color : 'black',
		top : 0,
		font : {
			fontSize : 48
		},
	});

	var locationView = Ti.UI.createView({
		//backgroundColor : 'gray',
		top : '110dp',
		width : 'auto',
		height : 50
	});

	locationView.add(locationLabel);

	mainWindow.add(locationView);
	
	// var circleLabel = Ti.UI.createImageView({
		// image : '/img/circle.jpg',
		// height : '300p',
		// width : '300p',
	// });

	var iconLabel = Ti.UI.createImageView({
		image : myObj.icon,
		height : '80',
		width : '80',
		//left : '100',
		top: '30'
	});

	mainWindow.add(iconLabel);
	

	var tempLabel = Ti.UI.createLabel({
		text : myObj.currentTemp,
		color : 'black',
		top : 0,
		font : {
			fontSize : 48
		},
	}); 
	
	var tempView = Ti.UI.createView({
		//backgroundColor : 'gray',
		top : '0dp',
		width : 'auto',
		height : 50
	});
	
	tempView.add(tempLabel);
	
	mainWindow.add(tempView);
	

	var weatherLabel = Ti.UI.createLabel({
		text : myObj.weather,
		color : 'black',
		top : 0,
		font : {
			fontSize : 48
		},
	}); 
	
	var weatherView = Ti.UI.createView({
		//backgroundColor : 'gray',
		top : '20dp',
		width : 'auto',
		height : 'auto'
	});
	
	weatherView.add(weatherLabel);
	
	mainWindow.add(weatherView);

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