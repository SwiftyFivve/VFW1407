//work on tab background, removing details label, add descrip. organize. multiple tabs opening
// organize favourites table

var tabGroup = Ti.UI.createTabGroup({
	// backgroundColor : '#CEE3F6',
	// tabsBackgroundColor : '#D8D8D8',
	//tabsBackgroundImage : tabView
});

var infoWindow = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
	layout : 'veritcal',
	titleAttributes : {
		color : 'black',
		font : {
			fontFamily : 'Snell Roundhand',
			fontSize : 36
		},
		shadow : {
			color : 'gray',
			offset : {
				width : 1,
				height : 1
			}
		}
	}
});

var dataBackground = Ti.UI.createScrollView({
	top : '0%',
	width : '90%',
	height : '100%',
	backgroundColor : '#F2F2F2',
	showVerticalScrollIndicator : true
});

var backImg = Ti.UI.createImageView({
	image : 'img/back.png'
});

var backButton = Ti.UI.createButton({
	top : '20%',
	left : '0%',
	height : '70%',
	width : '10%',
});

backButton.add(backImg);

var dayBox = Ti.UI.createView({
	top : '0%',
	height : '8%',
	width : 'auto',
	// borderWidth : '1dp',
	// borderColor : 'black',
	backgroundColor : '#FAAC58'
});
dataBackground.add(dayBox);

var photoBox = Ti.UI.createView({
	top : '13%',
	height : '200dp',
	width : '200dp',
	// borderWidth : '1dp',
	// borderColor : 'black',
	left : '9%',
	backgroundColor : 'white'
});
dataBackground.add(photoBox);

infoWindow.add(dataBackground);

//Sections Begin
var venueSecLabel = Ti.UI.createLabel({
	text : 'Venue',
	color : 'black',
	left : '3%',
	font : {
		fontSize : '20dp',
		fontWeight : 'bold'
	}
});

var venueSection = Ti.UI.createView({
	//add title attributes
	height : '3%',
	width : 'auto',
	top : '40%',
	// borderWidth : '1dp',
	// borderColor : 'black',
	backgroundColor : 'white',
});
venueSection.add(venueSecLabel);
dataBackground.add(venueSection);

var decripTitle = Ti.UI.createLabel({
	text : 'Description',
	color : 'black',
	left : '3%',
	font : {
		fontSize : '20dp',
		fontWeight : 'bold'
	}
});

var descripSection = Ti.UI.createView({
	//add title attributes
	height : '3%',
	width : 'auto',
	top : '55%',
	// borderWidth : '1dp',
	// borderColor : 'black',
	backgroundColor : 'white',
});
descripSection.add(decripTitle);
dataBackground.add(descripSection);
//End Sections

var tab1 = Ti.UI.createTab({
	title : "Details",
	window : infoWindow,
	//icon : Ti.UI.iPhone.SystemIcon.MOST_RECENT,
	transitionAnimation : true
});
tabGroup.addTab(tab1);

var favourites = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
	title : 'Favorites',
	titleAttributes : {
		color : 'black',
		font : {
			fontFamily : 'Snell Roundhand',
			fontSize : 36
		},
		shadow : {
			color : 'gray',
			offset : {
				width : 1,
				height : 1
			}
		}
	}
});

//creates tab2 to open favWindow/Favorites page
var tab2 = Ti.UI.createTab({
	title : "Favorites",
	window : favourites,
	//icon : Ti.UI.iPhone.SystemIcon.FAVORITES,
	transitionAnimation : true
});
tabGroup.addTab(tab2);

var SQLite = require('SQLite');
var cloud = require('cloud');

var detailPage = function(labels) {

	infoWindow.title = labels.title;
	//Important console.log to track the movement of API data
	//console.log('Line 61: ' + labels.zipcode);

	backButton.addEventListener('click', function() {
		tabGroup.close();
		dayBox.remove(dayLabel);
		photoBox.remove(photoView);
		dataBackground.remove(saveButton);
		dataBackground.remove(mapsButton);
		dataBackground.remove(ticketsButton);
		saveButton.remove(saved);
		saveButton.add(attending);
		check.remove(checked);
		dataBackground.remove(venueLabel);
		addressClick.remove(addressLabel);
		addressClick.remove(cityLabel);
		dataBackground.remove(descripLabel);

		//tabgrou remove all children
		//fix this
		// for (var d in dataBackground.children) {
		// if (dataBackground.children.hasOwnProperty(d)) {
		// dataBackground.remove(dataBackground.children[d]);
		// }
		// }

	});
	dayBox.add(backButton);

	//Save button starts
	var saveButton = Ti.UI.createButton({
		backgroundImage : 'img/box2.png',
		top : '12%',
		width : '32%',
		height : '8%',
		right : '9%'
	});

	var check = Ti.UI.createImageView({
		image : 'img/check2.png'
	});
	saveButton.add(check);

	var attending = Ti.UI.createLabel({
		text : "I'm Attending",
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		right : '10%'
	});
	saveButton.add(attending);
	//save button ends

	//open in Maps starts
	var mapsButton = Ti.UI.createButton({
		backgroundImage : 'img/box2.png',
		top : '20.25%',
		width : '32%',
		height : '8%',
		right : '9%'
	});

	var mapIcon = Ti.UI.createImageView({
		image : 'img/map2.png',
		height : '50%',
		width : '15%',
		left : '7%'
	});
	mapsButton.add(mapIcon);

	var map = Ti.UI.createLabel({
		text : "Open Map",
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		right : '20%'
	});
	mapsButton.add(map);
	//open in maps ends

	//ticket button starts
	var ticketsButton = Ti.UI.createButton({
		backgroundImage : 'img/box2.png',
		top : '28.5%',
		width : '32%',
		height : '8%',
		right : '9%'
	});

	var tixIcon = Ti.UI.createImageView({
		image : 'img/ticket2.png',
		height : '69%',
		width : '23%',
		left : '5%'
	});
	ticketsButton.add(tixIcon);

	var tickets = Ti.UI.createLabel({
		text : "Tickets",
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		right : '27%'
	});
	ticketsButton.add(tickets);
	//ticket button ends

	var dayLabel = Ti.UI.createLabel({
		text : labels.day + ' @' + labels.venue,
		color : 'white',
		top : '25%',
		//width: '80%',
		font : {
			fontSize : '30dp'
		},
		width : '80%',
		textAlign : 'center'
	});
	dayBox.add(dayLabel);

	var timeLabel = Ti.UI.createLabel({
		text : labels.time,
		color : 'white',
		top : '21%',
		font : {
			fontSize : '30dp'
		},
	});

	var photoView = Ti.UI.createImageView({
		image : labels.photo,
		height : '200dp',
		width : '200dp',
	});
	photoBox.add(photoView);

	var saved = Ti.UI.createLabel({
		text : 'Saved!',
		color : 'white',
		font : {
			fontWeight : 'bold',
			fontSize : '20dp'
		},
		right : '25%'
	});

	var checked = Ti.UI.createImageView({
		image : 'img/theCheck.png'
	});

	saveButton.addEventListener('click', function() {
		//console.log('Line 289: '+ labels.photo);
		var dialog = Ti.UI.createAlertDialog({
			confirm : 0,
			buttonNames : ['Save', 'Cancel'],
			message : 'Would you like to Save "' + labels.title + '"?',
			title : 'Save Event'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.confirm) {
				var saveData = {
					title : labels.title,
					day : dayLabel.text,
					time : timeLabel.text,
					photo : labels.photo,
					venue : venueLabel.text,
					address : addressLabel.text,
					city : cityLabel.text,
					descrip : descripLabel.text,
					site : labels.site
				};
				saveButton.remove(attending);
				saveButton.add(saved);
				check.add(checked);
				//save functions
				SQLite.save(saveData);
				cloud.runCloud(saveData);
			}
		});
		dialog.show();
	});
	dataBackground.add(saveButton);
	//End saveButton clickEvent

	favourites.add(SQLite.favTable);

	//Start mapsButton clickEvent
	mapsButton.addEventListener('click', function() {
		var geoLocation = (require('geo').getLocation());
		console.log('Line 250: ' + geoLocation);
		var dialog = Ti.UI.createAlertDialog({
			confirm : 0,
			buttonNames : ['Open', 'Cancel'],
			message : 'Would you like to open Maps?',
			title : 'Open in Maps'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.confirm) {
				Ti.Platform.openURL("http://maps.apple.com/?saddr=" + geoLocation + "&daddr=" + labels.address + " " + labels.city + ", " + labels.state + " " + labels.zipcode + "");
			}
		});
		dialog.show();
	});
	dataBackground.add(mapsButton);
	//End mapsButton clickEvent

	//Start ticketsButton clickEvent
	ticketsButton.addEventListener('click', function() {
		var dialog = Ti.UI.createAlertDialog({
			confirm : 0,
			buttonNames : ['Confirm', 'Cancel'],
			message : 'Would you like to open Safari?',
			title : 'Open in Browser'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.confirm) {
				Ti.Platform.openURL(labels.site);
			}
		});
		dialog.show();

	});
	dataBackground.add(ticketsButton);
	//End ticketsButton clickEvent

	//Start forming address for display
	var venueLabel = Ti.UI.createLabel({
		text : labels.venue,
		color : 'black',
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		top : '45%',
		left : '3%'
	});
	dataBackground.add(venueLabel);

	var addressClick = Ti.UI.createButton({
		height : 'auto',
		width : 'auto',
		layout : 'vertical',
		top : '47.5%',
		left : '3%'
	});

	addressClick.addEventListener('click', function() {
		var geoLocation = (require('geo').getLocation());
		console.log('Line 250: ' + geoLocation);
		var dialog = Ti.UI.createAlertDialog({
			confirm : 0,
			buttonNames : ['Open', 'Cancel'],
			message : 'Would you like to open Maps?',
			title : 'Open in Maps'
		});
		dialog.addEventListener('click', function(e) {
			if (e.index === e.source.confirm) {
				Ti.Platform.openURL("http://maps.apple.com/?saddr=" + geoLocation + "&daddr=" + labels.address + " " + labels.city + ", " + labels.state + " " + labels.zipcode + "");
			}
		});
		dialog.show();
	});

	var addressLabel = Ti.UI.createLabel({
		text : labels.address,
		color : 'blue',
		font : {
			fontSize : '20dp'
		},
		left : '0%'
	});
	addressClick.add(addressLabel);

	var cityLabel = Ti.UI.createLabel({
		text : labels.city + ", " + labels.state + " " + labels.zipcode,
		color : 'blue',
		font : {
			fontSize : '20dp'
		},
		left : '0%'
	});
	addressClick.add(cityLabel);

	dataBackground.add(addressClick);
	//Start forming address for display

	var descripLabel = Ti.UI.createLabel({
		text : labels.descrip,
		color : 'black',
		top : '60%',
		left : '3%',
		font : {
			fontSize : '20dp',
		}
	});
	dataBackground.add(descripLabel);

	//end of details page

	tabGroup.open();
};

exports.detailPage = detailPage;
