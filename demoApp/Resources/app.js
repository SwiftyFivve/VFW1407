//Jordan Weaver
// VFW Week 1
//0714

//wunderground API key = ec864c4dc772cc90

// api require
var api = require('api');
//requires sqlite module
var SQLite = require('SQLite');

//console.log(api);

//main Window
var mainWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : 'Weather +',
	backgroundColor : 'white'
});

var table = Ti.UI.createTableView();

//console.log(api.myObj);

mainWindow.add(table);

mainWindow.open();