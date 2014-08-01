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
			console.log('Line 15: '+ date);

			var dataObj = {
			title : events[i].title,
			time : events[i].start_time,
			day : events[i].start_time,
			venue : events[i].venue_name,
			address : events[i].venue_address,
			city : events[i].city_name,
			state : events[i].region_abbr,
			zipCode : events[i].postal_code,
			descrip : events[i].description,
			site : events[i].url,
			theMonth: null,
			theDay: null,
			theYear: null, 
			url :null
		};

		//format the date
		var formatDate = function(date) {
			var theDate = date.split(" ");
			var dateFormat = new Date();
			var theDay = dateFormat.toLocaleDateString(theDate[0]);
			var theDay2 = dateFormat.toLocaleDateString(theDate[0]);
			var theTime = dateFormat.toLocaleTimeString(theDate[1]);
			var theTime2 = dateFormat.toLocaleTimeString(theDate[1]);

			dataObj.time = theTime;
			dataObj.day = theDay;
			//look at old code on gitHub
		};
		formatDate(date);

		//separate the date for row view
		var dayData = dataObj.day;
		var formatTableDate = function(dayData) {
			var theDate = dayData.split(" ");
			
			var month = theDate[0];
			dataObj.theMonth = month.slice(0, 3);
			var day = theDate[1];
			var daySplit = day.split(",");
			dataObj.theDay = daySplit[0];
			
			var year = theDate[2];
			dataObj.theYear = year.slice(2, 5);
		};
		formatTableDate(dayData);
		console.log('Line 62: '+dataObj.theYear);

		//grab the photos real URL
		if (photo === null) {
			dataObj.url = '/img/noImage.png';
		} else {
			dataObj.url = photo.medium.url;
		}

		table.runTable(dataObj);
		//Important console.log to track the movement of API data
		//console.log("Line 53: " + dataObj.day);
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
