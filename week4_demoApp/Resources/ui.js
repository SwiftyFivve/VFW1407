//get a real logo

var mainWindow = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
	//layout : 'vertical'
});

// var testLabel = Ti.UI.createLabel({
// text : 'Test API pull',
// color : 'blue'
// });

var logo = Ti.UI.createImageView({
	image : '/img/rocknrollpetrock2.jpg',
	top : '23%',
	height : '150dp',
	width : '250dp'
});

mainWindow.add(logo);

var searchBar = Ti.UI.createTextField({
	width : '25%',
	height : '30dp',
	top : '40%',
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText : 'Zip Code',
	color : 'black',
	editable : true
	//keyboardType : Titanium.UI.KEYBOARD_DECIMAL_PAD
});

mainWindow.addEventListener("click", function() {
	searchBar.blur();
});

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
	//searchBar.editable = false;
});

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

var submitButton = Ti.UI.createButton({
	width : '150dp',
	height : '30dp',
	top : '50.5%',
	backgroundColor : '#D8D8D8',
	title : 'Submit',
	color : 'white',
	borderRadius : '5dp'
});

//This is where the magic begins
submitButton.addEventListener('click', function() {
	var y = distance.getIndex();
	var miles = distance.labels[y];
	if (searchBar.value === '') {
		console.log('Line 80: Miles = ' + miles);
		geo.runGeo(miles);
	} else {
		console.log('Line 84: Miles = ' + miles);
		console.log('Line 85: ' + searchBar.value);
		var zip = searchBar.value;
		api.runApi(zip, miles);
	}
	//may need to fix for android
	var t1 = Ti.UI.create2DMatrix();
	t1 = t1.translate(0, -200);
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1800;
	logo.animate(a1);
	
	//Below is code to make it flip to the top
	
	// var t1 = Ti.UI.create3DMatrix();
	// t1 = t1.translate(0, 100, 50);
	// t1.m34 = 1.0 / -90;
	// var a1 = Ti.UI.createAnimation();
	// a1.transform = t1;
	// a1.duration = 800;
	// logo.animate(a1);
});

mainWindow.add(searchBar);
mainWindow.add(submitButton);

exports.mainWindow = mainWindow;