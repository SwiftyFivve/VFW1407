//Run geo grab on load
//send geolocation, through parameters, to api.js, with api call within a function
//set lat, lng to the http network client(The api address), within the same function
//populate the ui with a listview of nearby attractions, using for loop to set list. up to 10-15
// on right side of individual listings set a favorites button
//favorite button on click to save to SQLite and Cloud
//maybe populate a favorites list

var Cloud = require('ti.cloud');
Cloud.debug = true; //as we are in Development mode


Cloud.Users.login({
    login: 'demoadmin',
    password: '12345'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e))
        );
    }
});

var ui = require('ui');
var geo = require('geo');
var api = require('api');


geo.runGeo();


	
	
	
ui.win.add(ui.myView);
ui.win.open();

//Need Run Geo function that runs on event listener

//Pass IDs placeId = place.id

//put data in a cutom object

//create cloud database
//Cloud.Place.create({
	// name: ts,
	// latitude: lat,
	// ect.
// }, function(e){
	//whatever I want to happen with data goes here. populating
	// })
