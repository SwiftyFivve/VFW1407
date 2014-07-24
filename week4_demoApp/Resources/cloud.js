exports.runCloud = function(title) {
	Cloud.Places.create({
		name : title,
		state : 'California',
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