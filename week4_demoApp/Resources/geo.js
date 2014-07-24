//finsihed

var zipReverse = function(myObj, miles) {

	Titanium.Geolocation.reverseGeocoder(myObj.lat, myObj.lng, function(evt) {
		//address = JSON.stringify(evt);
		if (Ti.Platform.osname === "android") {
			var zip = evt.places[0].postalCode;
		} else {
			var zip = evt.places[0].zipcode;
		}
		Ti.API.info("reverse geolocation result = " + JSON.stringify(evt));
		alert('zipcode = ' + zip);
		api.runApi(zip, miles);
	});

};

var runGeo = function(miles) {
	console.log("Line 18: Miles = "+ miles);
	Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords.";
	Ti.Geolocation.getCurrentPosition(function(e) {
		if (Ti.Platform.osname === "android") {
			var myObj = {
				lat : 34.101604,
				lng : -118.334037
			};
		} else {
			var myObj = {
				lat : e.coords.latitude,
				lng : e.coords.longitude
			};
		}
		//console.log("Line 33: Lat. " + myObj.lat + " Long. " + myObj.lng);
		zipReverse(myObj, miles);
	});
	//getCurrentPosition closing
};
//runGeo closing

exports.runGeo = runGeo;
