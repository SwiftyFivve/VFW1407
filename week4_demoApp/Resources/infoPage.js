//work on tab background, removing details label, add descrip. organize. multiple tabs opening
// organize favourites table

var tabGroup = Ti.UI.createTabGroup({
	backgroundColor : '#CEE3F6',
	tabsBackgroundColor : '#D8D8D8',
	//tabsBackgroundImage : tabView
});

var infoWindow = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
	layout : 'veritcal'
});

var favourites = Ti.UI.createWindow({
		backgroundImage : '/img/background.jpg',
	});

var SQLite = require('SQLite');
var cloud = require('cloud');

var detailPage = function(labels) {

	var backButton = Ti.UI.createButton({
		title : 'back',
		top : '3%',
		left : '3%'
	});
	backButton.addEventListener('click', function() {
		tabGroup.close();
		//fix this
		infoWindow.remove(logo, titleLabel, timeLabel, venueLabel, cityLabel, stateLabel, zipcodeLabel, photoView);
	});
	infoWindow.add(backButton);

	var logo = Ti.UI.createImageView({
		image : '/img/rocknrollpetrock2.jpg',
		top : '4%',
		height : '150dp',
		width : '250dp'
	});

	infoWindow.add(logo);

	//make this window look organized
	var titleLabel = Ti.UI.createLabel({
		text : labels.title,
		top : '21%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(titleLabel);
	
	var timeLabel = Ti.UI.createLabel({
		text : labels.time,
		top : '29%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(timeLabel);
	
	var venueLabel = Ti.UI.createLabel({
		text : labels.venue,
		top : '35%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(venueLabel);
	
	var cityLabel = Ti.UI.createLabel({
		text : labels.city,
		top : '40%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(cityLabel);
	
	var stateLabel = Ti.UI.createLabel({
		text : labels.state,
		top : '50%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(stateLabel);
	
	var zipcodeLabel = Ti.UI.createLabel({
		text : labels.zipcode,
		top : '55%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(zipcodeLabel);
	
	var photoView = Ti.UI.createImageView({
		image : labels.photo,
		top : '60%',
		height : 'auto',
		width : 'auto',
		left : '7%'
	});
	console.log(labels.photo);
	infoWindow.add(photoView);

	var saveButton = Ti.UI.createButton({
		title : 'Save',
		top : '65%'
	});

	saveButton.addEventListener('click', function() {
		var title = titleLabel.text;
		SQLite.save(title);
		cloud.runCloud(title);
	});
	infoWindow.add(saveButton);

	var tab1 = Ti.UI.createTab({
		title : "Details",
		window : infoWindow,
		//icon : Ti.UI.iPhone.SystemIcon.MOST_RECENT,
		transitionAnimation : true
	});
	tabGroup.addTab(tab1);
	//end of details page

	favourites.add(SQLite.favTable);
	
	//creates tab2 to open favWindow/Favorites page
	var tab2 = Ti.UI.createTab({
		title : "Favorites",
		window : favourites,
		//icon : Ti.UI.iPhone.SystemIcon.FAVORITES,
		transitionAnimation : true
	});
	tabGroup.addTab(tab2);

	tabGroup.open();
};

exports.detailPage = detailPage;
