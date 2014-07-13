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
	backgroundImage : '/img/background1.jpg'
});

//table.setData(api.info);

//console.log("line 26: " +api.info[0].temp);

mainWindow.open();