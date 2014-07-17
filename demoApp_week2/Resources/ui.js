//var Map = require('ti.map');
var SQLite = require('SQLite');
var Cloud = require('cloud');

//Tabs
var tabGroup = Ti.UI.createTabGroup({
	backgroundColor : '#CEE3F6',
	tabsBackgroundColor : '#D8D8D8',
});

var titleLabel = Ti.UI.createLabel({
	text : "Jordan's Location Tracker and Really Long Title to Take Up Space!",
	font : {
		fontSize : "50dp",
		fontWeight : "bold"
	},
	textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
	width : '600sp'
});

var titleView = Ti.UI.createView({
	top : '20dp',
	height : '290dp',
	width : '700sp',
	backgroundColor : '#F6E3CE',
	borderWidth : "10dp"

});

titleView.add(titleLabel);

var win = Ti.UI.createWindow({
	backgroundColor : '#DF0101',
	layout : 'vertical',
	title : 'Nearby Places'
});

win.add(titleView);

var table = Ti.UI.createTableView({
	height : "auto",
	width : "auto",
	left : "50sp",
	right : "50sp",
	backgroundColor : '#DF0101',
	borderRadius : '5dp',
});

var holder = Ti.UI.createView({
	top : "20sp",
	height : "600sp",
	width : "600sp",
	borderColor : 'white',
	borderRadius : '20'
});

holder.add(table);
win.add(holder);

//Creates tab 1
var tab1 = Ti.UI.createTab({
	title : "Home",
	window : win,
	icon : Ti.UI.iPhone.SystemIcon.MOST_RECENT,
	transitionAnimation : true
});
tabGroup.addTab(tab1);

//Favourites Window
var favLabel = Ti.UI.createLabel({
	text : "The Favorites Page, also With a Long Title to Fill Space",
	font : {
		fontSize : "50dp",
		fontWeight : "bold",
	},
	textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
	width : '600sp'
});

var favView = Ti.UI.createView({
	top : '20dp',
	height : '290dp',
	width : '700sp',
	backgroundColor : '#F6E3CE',
	borderWidth : "10dp"

});

favView.add(favLabel);

var favWindow = Ti.UI.createWindow({
	layout : 'vertical',
	title : "Favorites",
	backgroundColor : '#DF0101',
	layout : 'vertical',
});
favWindow.add(favView);

var favHolder = Ti.UI.createView({
	top : "20sp",
	height : "600sp",
	width : "600sp",
	borderColor : 'white',
	borderRadius : '20'
});

favHolder.add(SQLite.favTable);
favWindow.add(favHolder);

//creates tab2 to open favWindow/Favorites page
var tab2 = Ti.UI.createTab({
	title : "Favorites",
	window : favWindow,
	icon : Ti.UI.iPhone.SystemIcon.FAVORITES,
	transitionAnimation : true
});
tabGroup.addTab(tab2);

//Creat big view to put label and view inside of, maybe - this is the view with the favorites button
//favorites is clicked, promt option alert asking to saved
//click yes, run cloud and local functions
//local populates rows, set array and sets on table, in the favorites tab
var data = [];
exports.labels = function(json) {
	for ( i = 0; i < 15; i++) {
		var venues = json.response.venues[i];
		var name = venues.name;
		var number = venues.contact.formattedPhone;
		var address = venues.location.formattedAddress[0];
		var cityState = venues.location.formattedAddress[1];
		//add view that parents label and view for favorites
		var plusOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		var allLabels = [];
		var listNumberLabel = Ti.UI.createLabel({
			text : plusOne[i] + ". ",
			color : 'white',
			font : {
				fontSize : 20,
				fontWeight : 'bold'
			},
			top : 20,
			left : 20
		});
		allLabels.push(listNumberLabel);
		var nameLabel = Ti.UI.createLabel({
			text : name,
			color : 'white',
			font : {
				fontSize : 20,
				fontWeight : 'bold'
			},
			top : 20,
			left : 50
		});
		allLabels.push(nameLabel);
		var numberLabel = Ti.UI.createLabel({
			text : number,
			color : 'white',
			font : {
				fontSize : 10
			},
			top : 15,
			right : 0
		});
		allLabels.push(numberLabel);

		var addressLabelOne = Ti.UI.createLabel({
			text : address,
			color : 'white',
			font : {
				fontSize : 10
			},
			top : 50,
			right : 0,
			height : 'auto',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT
		});

		allLabels.push(addressLabelOne);
		var addressLabelTwo = Ti.UI.createLabel({
			text : cityState,
			color : 'white',
			font : {
				fontSize : 10
			},
			top : 70,
			right : 0,
			height : 'auto',
			textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT
		});

		allLabels.push(addressLabelTwo);
		var row = Ti.UI.createTableViewRow({
			height : '120dp',
			width : 'auto',
			data : {
				num : listNumberLabel.text,
				name : nameLabel.text,
				number : numberLabel.text,
				address : addressLabelOne.text,
				cityState : addressLabelTwo.text
			},
			//clickable : true,

		});
		row.add(allLabels);
		data.push(row);
		table.setData(data);
	};
};
table.addEventListener('click', function(e) {
	var label = e.source.data.name;
	//console.log(e.source.data.number);
	console.log(e.source.data);
	Cloud.runCloud(label);
	SQLite.save(label);
	// on click run SQLite and Cloud
	// populate favorites tab
});

// exports.mapview = Map.createView({
// mapType: Map.NORMAL_TYPE,
// region: {latitude:33.74511, longitude:-84.38993,
// latitudeDelta:0.01, longitudeDelta:0.01},
// animate:true,
// regionFit:true,
// userLocation:true,
// height:300,
// width:'auto'
// //annotations:[mountainView]
// });

// var coordinateLabel = Ti.UI.createLabel({
// color: '#fff',
// text: 'Latitude: ' + lat + ', Longitude: ' + lng,
// height: Ti.UI.SIZE,
// textAlign: 'center',
// font: {
// fontSize: '20dp',
// fontWeight: 'bold'
// }
// });

exports.win = win;
exports.tabGroup = tabGroup;
