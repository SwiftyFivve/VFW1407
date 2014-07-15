// var myView = Ti.UI.createView({
	// height: 100,
	// width : 100
// });

var runGeo = function(ev){
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords."; 
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var myObj = {
			lat : lat,
			lng : lng
		};
		api.runApi(lat, lng);
	}); //getCurrentPosition closing
}; //runGeo closing
exports.runGeo = runGeo;
