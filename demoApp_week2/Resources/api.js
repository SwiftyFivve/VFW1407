//var SQLite = require('SQLite');

var info = [];

var runApi = function(lat, lng) {
	var remoteResponse = function() {
		console.log('Sucessful network');
		Ti.API.debug(this.responseText);
		json = JSON.parse(this.responseText);
		ui.labels(json);
	};
	//Remote info and request
	var remoteError = function(e) {
		Ti.API.debug("Status: " + this.status);
		Ti.API.debug("Text: " + this.responseText);
		Ti.API.debug("Error: " + e.error);
		alert("There was a problem pulling remote data.");
	};

	var xhr = Ti.Network.createHTTPClient({
		onload : remoteResponse,
		onerror : remoteError,
		timeout : 8000
	});

	xhr.open("GET", "https://api.foursquare.com/v2/venues/search?ll=" + lat + "," + lng + "&client_id=1XTPZPQHFZVGG3I11K4BNLHFXNAQBZ00PIXFUVE2PIARIPLY&client_secret=BO4LLYT201YLWZBYXR5EGSJJZ2DNZLOESETJIVYVFC0VXF54&v=20140714");
	xhr.send();
};

exports.runApi = runApi; 