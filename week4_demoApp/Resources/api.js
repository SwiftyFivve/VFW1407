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

			var photo = events[i].image;
			var date = events[i].start_time;
			var dataObj = {
				title : events[i].title,
				time : events[i].start_time,
				venue : events[i].venue_name,
				address : events[i].venue_address,
				city : events[i].city_name,
				state : events[i].region_abbr,
				zipCode : events[i].postal_code,
				descrip : events[i].description,
				site : events[i].url,
				url : null
			};
			//Important console.log to track the movement of API data
			// console.log("Line 26: "+dataObj.address);
			//grab the photos real URL
			if (photo === null) {
				dataObj.url = '/img/noImage.png';
			} else {
				dataObj.url = photo.medium.url;
			}

			var formatDate = function(date) {
				var arr = date.split(/[- :" "]/), // from your example var date = "2012-11-14T06:57:36+0000";
				date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], 00);
				newDate = date.toString("MMMM");
				//change time!!
				var newTime = new Date(newDate);
				dataObj.time = newDate;
				//console.log('Line 38: '+newDate);
				//console.log('Line 39: '+newTime);
			};
			
			formatDate(date);

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

	// console.log("Line 41: Miles = " + miles);
	xhr.open("GET", "http://api.eventful.com/json/events/search?app_key=6nQMfRdCKT9Stx3P&q=music&l=" + zip + "&within=" + miles + "&units=miles");
	xhr.send();
};

exports.runApi = runApi;
