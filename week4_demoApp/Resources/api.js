//finished

var runApi = function(zip, miles) {
	var remoteResponse = function() {
		console.log('Sucessful network');
		console.log('Line 4: ' + zip);
		console.log("Line 5: Miles = " + miles);
		Ti.API.debug(this.responseText);
		json = JSON.parse(this.responseText);
		events = json.events.event;
		for (var i = 0; i < events.length; i++) {
			
			var	photo = events[i].image;
			var dataObj = {
				title : events[i].title,
				time : events[i].start_time,
				venue : events[i].venue_name,
				address : events[i].venue_address,
				city : events[i].city_name,
				state : events[i].region_abbr,
				zipCode : events[i].zipcode,
				descrip : events[i].description,
				url : null
			};
			console.log('Line 24: '+dataObj.zipcode);
			//grab the photos real URL
			if (photo === null) {
				dataObj.url = '/img/noImage.png';
			} else {
				dataObj.url = photo.medium.url;
			}
			table.runTable(dataObj);
		}
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

	console.log("Line 41: Miles = " + miles);
	xhr.open("GET", "http://api.eventful.com/json/events/search?app_key=6nQMfRdCKT9Stx3P&q=music&l=" + zip + "&within=" + miles + "&units=miles");
	xhr.send();
};

exports.runApi = runApi;
