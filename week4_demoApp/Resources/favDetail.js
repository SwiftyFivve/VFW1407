var mainWindow = Ti.UI.createWindow({
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
	width : '100%',
	height : '100%',
	backgroundColor : '#F2F2F2',
	showVerticalScrollIndicator : true,
});
var titleBox = Ti.UI.createView({
	top : '0%',
	backgroundColor : 'black',
	height : '7%',
	width : 'auto'
});
dataBackground.add(titleBox);

var backImg = Ti.UI.createImageView({
	image : 'img/back.png'
});

var backButton = Ti.UI.createButton({
	top : '20%',
	left : '0%',
	height : '70%',
	width : '15%',
});
backButton.add(backImg);

var timeBox = Ti.UI.createView({
	top : '7%',
	height : '5%',
	width : 'auto',
	// borderWidth : '1dp',
	// borderColor : 'black',
	backgroundColor : '#FAAC58'
});
dataBackground.add(timeBox);

var photoBox = Ti.UI.createView({
	top : '15%',
	height : '200dp',
	width : '200dp',
	// borderWidth : '1dp',
	// borderColor : 'black',
	left : '9%',
	backgroundColor : 'white'
});
dataBackground.add(photoBox);

mainWindow.add(dataBackground);

//Save button starts
var saveButton = Ti.UI.createButton({
	backgroundImage : 'img/box2.png',
	top : '14%',
	width : '30%',
	height : '7%',
	right : '9%'
});

var check = Ti.UI.createImageView({
	image : 'img/check2.png',
	left : '2%'
});

var checked = Ti.UI.createImageView({
	image : 'img/theCheck.png',
	left : '2%'
});
check.add(checked);
saveButton.add(check);

var saved = Ti.UI.createLabel({
	text : "Saved!",
	color : 'white',
	font : {
		fontWeight : 'bold',
		fontSize : '20dp'
	},
	right : '30%'
});
saveButton.add(saved);
//save button ends

//open in Maps starts
var mapsButton = Ti.UI.createButton({
	backgroundImage : 'img/box2.png',
	top : '21%',
	width : '30%',
	height : '7%',
	right : '9%'
});

var mapIcon = Ti.UI.createImageView({
	image : 'img/map2.png',
	height : '60%',
	width : '15%',
	left : '4.5%'
});
mapsButton.add(mapIcon);

var map = Ti.UI.createLabel({
	text : "Open Map",
	color : 'white',
	font : {
		fontWeight : 'bold',
		fontSize : '20dp'
	},
	right : '23%'
});
mapsButton.add(map);
//open in maps ends

//ticket button starts
var ticketsButton = Ti.UI.createButton({
	backgroundImage : 'img/box2.png',
	top : '28.5%',
	width : '30%',
	height : '7%',
	right : '9%'
});

var tixIcon = Ti.UI.createImageView({
	image : 'img/ticket2.png',
	height : '69%',
	width : '23%',
	left : '4.5%'
});
ticketsButton.add(tixIcon);

var tickets = Ti.UI.createLabel({
	text : "Tickets",
	color : 'white',
	font : {
		fontWeight : 'bold',
		fontSize : '20dp'
	},
	right : '30%'
});
ticketsButton.add(tickets);
//ticket button ends

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
	top : '54%',
	// borderWidth : '1dp',
	// borderColor : 'black',
	backgroundColor : 'white',
});
descripSection.add(decripTitle);
dataBackground.add(descripSection);

var favDetailFunc = function(data) {

	console.log('Line 190: ' + data.photo);

	var titleLabel = Ti.UI.createLabel({
		text : data.title,
		color : 'white',
		font : {
			fontSize : '30dp',
			fontWeight : 'bold'
		}
	});
	titleBox.add(titleLabel);

	backButton.addEventListener('click', function() {
		mainWindow.close();
		titleBox.remove(titleLabel);
		timeBox.remove(timeLabel);
		photoBox.remove(photoView);
		dataBackground.remove(saveButton);
		dataBackground.remove(mapsButton);
		dataBackground.remove(ticketsButton);
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
	titleBox.add(backButton);

	var timeLabel = Ti.UI.createLabel({
		text : data.time,
		color : 'white',
		top : '21%',
		font : {
			fontSize : '20dp'
		},
	});
	timeBox.add(timeLabel);

	var photoView = Ti.UI.createImageView({
		image : data.photo,
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

	saveButton.addEventListener('click', function() {

	});
	dataBackground.add(saveButton);
	//End saveButton clickEvent

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
				Ti.Platform.openURL("http://maps.apple.com/?saddr=" + geoLocation + "&daddr=" + data.address + " " + data.city +"");
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
				Ti.Platform.openURL(data.site);
			}
		});
		dialog.show();

	});
	dataBackground.add(ticketsButton);
	//End ticketsButton clickEvent

	//Start forming address for display
	var venueLabel = Ti.UI.createLabel({
		text : data.venue,
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
		top : '47%',
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
				Ti.Platform.openURL("http://maps.apple.com/?saddr=" + geoLocation + "&daddr=" + data.address + " " + data.city +"");
			}
		});
		dialog.show();
	});

	var addressLabel = Ti.UI.createLabel({
		text : data.address,
		color : 'blue',
		font : {
			fontSize : '20dp'
		},
		left : '0%'
	});
	addressClick.add(addressLabel);

	var cityLabel = Ti.UI.createLabel({
		text : data.city,
		color : 'blue',
		font : {
			fontSize : '20dp'
		},
		left : '0%'
	});
	addressClick.add(cityLabel);
	//addressView.add(addressClick);

	dataBackground.add(addressClick);
	//Start forming address for display

	var descripLabel = Ti.UI.createLabel({
		text : data.descrip,
		color : 'black',
		top : '60%',
		left : '3%',
		font : {
			fontSize : '20dp',
		}
	});
	dataBackground.add(descripLabel);

	mainWindow.open();

};

exports.favDetailFunc = favDetailFunc;
