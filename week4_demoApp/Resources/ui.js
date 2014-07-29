//get a real logo

var mainWindow = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
	//layout : 'vertical'
});

var logo = Ti.UI.createImageView({
	image : 'img/rocknrollpetrock2.png',
	top : '23%',
	height : '15%',
	width : '33%'
});

mainWindow.add(logo);

//boolean remove table from main window

var searchBar = Ti.UI.createTextField({
	width : '33%',
	height : '3%',
	top : '40%',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Zip Code',
	color : 'black',
	//editable : true
	//keyboardType : Titanium.UI.KEYBOARD_DECIMAL_PAD
});

mainWindow.addEventListener("click", function() {
	searchBar.blur();
});

if (Ti.Platform.osname === "android") {

} else {
	var distanceLabel = Ti.UI.createLabel({
		text : 'Within: ',
		left : '37%',
		top : '44%',
		font : {
			fontSize : '18dp',
			fontStyle : 'bold'
		},
		color : '#D8D8D8'
	});

	mainWindow.add(distanceLabel);

	var distance = Titanium.UI.createTabbedBar({
		labels : ['10', '20', '30'],
		backgroundColor : '#336699',
		top : '46.5%',
		style : Titanium.UI.iPhone.SystemButtonStyle.BAR,
		height : '30dp',
		width : '200dp',
		index : 0
	});

	mainWindow.add(distance);
}

var navButton = Ti.UI.createButton({
	width : '29dp',
	height : '29dp',
	right : '0%',
	backgroundColor : 'gray',
	backgroundImage : '/img/nav.jpg',
	borderRadius : '10dp'

});
searchBar.add(navButton);

navButton.addEventListener('click', function() {
	//maybe run geo from here, set value to zip
	searchBar.hintText = 'Current Loction';
	if (Ti.Platform.osname === "android") {
		var miles = '10';
	} else {
		var y = distance.getIndex();
		var miles = distance.labels[y];
	}
	geo.runGeo();
	searchBar.editable = false;
});

var submitButton = Ti.UI.createButton({
	width : '17%',
	height : '3%',
	top : '51%',
	backgroundColor : '#D8D8D8',
	title : 'Submit',
	color : 'white',
	borderRadius : '5dp'
});

//This is where the magic begins
submitButton.addEventListener('click', function(zip) {
	//find radius distance request from user
	if (Ti.Platform.osname === "android") {
		var miles = '10';
	} else {
		var y = distance.getIndex();
		var miles = distance.labels[y];
	}
	//end
	//Run API, send zip and miles through
	if (searchBar.value === '') {
		//console.log('Line 80: Miles = ' + miles);
		api.runApi(require('geo').getZip(), miles);
	} else {
		// console.log('Line 84: Miles = ' + miles);
		// console.log('Line 85: ' + searchBar.value);
		var zip = searchBar.value;
		//
		api.runApi(zip, miles);
	}
	//end
	//may need to fix for android
	var t1 = Ti.UI.create2DMatrix();
	t1 = t1.translate(0, -200);
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1800;
	logo.animate(a1);
});

mainWindow.add(searchBar);
mainWindow.add(submitButton);

exports.mainWindow = mainWindow;
