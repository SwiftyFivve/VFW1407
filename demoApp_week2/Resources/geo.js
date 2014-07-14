var myView = Ti.UI.createView({
	height: 100,
	width : 100
});

var runGeo = function(){
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords."; 
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var coordinateLabel = Ti.UI.createLabel({
			color: '#fff',
			text: 'Latitude: ' + lat + ', Longitude: ' + lng,
			height: Ti.UI.SIZE,
			textAlign: 'center',
			font: {
				fontSize: '20dp',
				fontWeight: 'bold'
			}
		});
		console.log('Line 21 ' + lat);
		console.log('Line 22 ' + lng);
		myView.add(coordinateLabel);  //myView would be a reference from app.js perhaps
		win.add(myView);
	}); //getCurrentPosition closing
}; //runGeo closing
exports.runGeo = runGeo;
