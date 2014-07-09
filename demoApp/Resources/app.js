//Jordan Weaver
// VFW Week 1
//0714

//wunderground API key = ec864c4dc772cc90

//main Window
var mainWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : 'Weather +',
	backgroundColor : 'white'
});

var table = Ti.UI.createTableView();
// api require
var api = require('api');

console.log(api.myObj);

mainWindow.add(table);


mainWindow.open();