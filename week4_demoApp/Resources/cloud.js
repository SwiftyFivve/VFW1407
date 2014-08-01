exports.runCloud = function(saveData) {
	Cloud.Places.create({
		name : saveData.title,
		day : saveData.day,
		time : saveData.time,
		venue : saveData.venue,
		address : saveData.address,
		state : saveData.city,
		website : 'http://www.appcelerator.com'
	}, function(e) {
		if (e.success) {
			var place = e.places[0];
			alert('Success:\n' + 'id: ' + place.id + '\n' + 'name: ' + place.name + '\n' + 'updated_at: ' + place.updated_at);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}; 