//finsihed

var zip;

var setZip = function(zipX){
	zip = zipX;
};

exports.getZip = function(){
	return zip;
};

var zipReverse = function(myObj) {

	Titanium.Geolocation.reverseGeocoder(myObj.lat, myObj.lng, function(evt) {
		//address = JSON.stringify(evt);
		
		if (Ti.Platform.osname === "android") {
			zip = evt.places[0].postalCode;
		} else {
			zip = evt.places[0].zipcode;
		}
		Ti.API.info("reverse geolocation result = " + JSON.stringify(evt));
		alert('zipcode = ' + zip);
		setZip(zip);
	});

};
//reverse Zip end

var location = {};

var setLocation = function(latX, lngX){
	location = latX +", "+ lngX;
	console.log('geo Line 35: '+ location);
};

exports.getLocation = function(){
	return location;
};

var runGeo = function() {
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
		zipReverse(myObj);
		setLocation(myObj.lat, myObj.lng);
	});
	//getCurrentPosition closing
};
//runGeo closing

exports.runGeo = runGeo;