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
