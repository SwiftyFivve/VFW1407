//Jordan Weaver
// VFW Week 1
//0714

//wunderground API key = ec864c4dc772cc90

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



var api = require('api'); 

var tabGroup = Ti.UI.createTabGroup({
	backgroundColor : '#CEE3F6',
	tabsBackgroundColor : '#D8D8D8',
});
//main Window
var mainWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : 'Weather +',
	//titleImage : '/img/reddit.png',
	//titleControl :
});
var addButton = Ti.UI.createButton({
	title : '+',
	font : {
		fontSize : 40
	},
	color : 'blue',
	right : 30,
	top : 20
});

addButton.addEventListener('click', function() {
	api.refresh();
});

mainWindow.add(addButton);

var tab1 = Ti.UI.createTab({
	title : "Current",
	window : mainWindow,
	icon : Ti.UI.iPhone.SystemIcon.MOST_RECENT
});
tabGroup.addTab(tab1);

var saveWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : "Saved Conditions",
});

var tab2 = Ti.UI.createTab({
	title : "Favorites",
	window : saveWindow,
	icon : Ti.UI.iPhone.SystemIcon.FAVORITES
});
tabGroup.addTab(tab2);
mainWindow.open(); 