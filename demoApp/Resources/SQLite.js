var db;
//Create Database
var createDatabase = db = Titanium.Database.open('weather');

db.execute('CREATE TABLE IF NOT EXISTS weatherTable (id INTEGER PRIMARY KEY, cityState TEXT, currentTemp TEXT, weather TEXT, icon TEXT)');

var mainWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : 'Weather +',
	backgroundImage : '/img/background2.jpg'
});



var createRows = function() {
	var newData = [];
	var rows = db.execute('SELECT * FROM weatherTable');
	while (rows.isValidRow()) {
		newData.push({
			cityState : rows.fieldByName('cityState'),
			currentTemp : rows.fieldByName('currentTemp'),
			weather : rows.fieldByName('weather'),
			icon : rows.fieldByName('icon')
		});
		rows.next();
	}
	return newData;
};

var savedResponse = function() {
	var info = [];
	var data = createRows();
	var allLabels = [];
	for (var i = 0; i < data.length; i++) {
		
		var myView = Ti.UI.createView({
			top : '0dp',
			height : 'auto',
			width :'auto',
			layout : 'vertical',
			//clickable : true,
			data : {
				cityState : data.cityState,
				currTemp : data.currentTemp,
				weather : data.weather,
				icon : data.icon
			}
		});
		
		var cityLabel = Ti.UI.createLabel({
			text : data[i].cityState,
			height : 'auto',
			width : 'auto',
			top : '100dp',
			color : 'white',
			font : {
				fontSize : 50,
			},
		});
		myView.add(cityLabel);
		
		var circle = Ti.UI.createView({
			backgroundColor : 'white',
			borderRadius : '250dp',
			height : '500dp',
			width : '500dp',
			layout : 'vertical',
			top : '100dp',
			opacity : 0.5
		});
		var iconLabel = Ti.UI.createImageView({
			image : data[i].icon,
			height : 'auto',
			width : 'auto',
			top : '130dp',
			size : '200dp',
		});
		circle.add(iconLabel);
		var tempLabel = Ti.UI.createLabel({
			text : data[i].currentTemp,
			height : 'auto',
			width : 'auto',
			top : '40dp',
			font : {
				fontSize : 50,
			},
		});
		circle.add(tempLabel);
		var weatherLabel = Ti.UI.createLabel({
			text : data[i].weather,
			height : 'auto',
			width : 'auto',
			top : '0dp',
			font : {
				fontSize : 50,
			},
		});
		circle.add(weatherLabel);
		myView.add(circle);
		console.log("Line 107: "+ myView.data.cityState);
		mainWindow.add(myView);
	}
};

savedResponse();

exports.mainWindow = mainWindow;

exports.save = function(myObj) {// instead of if ID, if argument.hasOwnProperty (id), as a string update else save new one camelcase
		db.execute('INSERT INTO weatherTable (cityState, currentTemp, weather, icon) VALUES (?,?,?,?)', myObj.cityState, myObj.currentTemp, myObj.weather, myObj.icon);
		console.log("Line 60: "+ myObj.cityState);
		savedResponse();
};