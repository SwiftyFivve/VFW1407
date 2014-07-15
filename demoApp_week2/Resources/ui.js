var SQLite = require('SQLite');

var win = Ti.UI.createWindow({
	backgroundColor : 'white',
	layout : 'vertical'
});

var myView = Ti.UI.createView({
	layout : 'vertical',
	// height : '100dp',
	// width : '300dp',
	// top : '5%'
});




exports.labels = function(json) {
	for ( i = 0; i < 5; i++) {
		var name = json.response.venues[i].name;
		//add view that parents label and view for favorites 
		var loopLabel = Ti.UI.createLabel({
			text : name,
			height : '100dp',
			width : '300dp',
			top : '5%'
		});
		myView.add(loopLabel);
		// console.log(myView);
		//ui.win.add(myView);
		loopLabel.addEventListener('click', function(e) {
			alert(e.source.text);
		});
	};
	
	
		
};



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


exports.myView = myView;
exports.win = win;
