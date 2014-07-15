var db;
//Create Database
var createDatabase = db = Titanium.Database.open('geo');

db.execute('CREATE TABLE IF NOT EXISTS geoTable (id INTEGER PRIMARY KEY, lat TEXT, lng TEXT)');

var createRows = function() {
	var newData = [];
	var rows = db.execute('SELECT * FROM geoTable');
	while (rows.isValidRow()) {
		newData.push({
			name : rows.fieldByName('name')
		});
		rows.next();
	}
	return newData;
};

var savedResponse = function() {
	var info = [];
	var data = createRows();
	for (var i = 0; i < data.length; i++) {
		var label = Ti.UI.createLabel({
			text : data[i].name,
			height : 'auto',
			width : 'auto',
			font : {
				fontSize : 20,
			},
		});

		var row = Ti.UI.createTableViewRow({
			height : '60dp',
			//clickable : true,
			data : {
				name : data[i].name
				// lat : data[i].lat, 
				// lng : data[i].lng
			}
		});
		console.log('Line 43 ' + row.data.name);
	}
};

exports.save = function(name) {
	// if (myObj.hasOwnProperty('id')) {
		// db.execute('UPDATE geoTable SET lat=?, lng=? WHERE id=?', myObj.lat, myObj.lng);
		// //savedResponse();
		// console.log("Update is firing");
	// } else {
		db.execute('INSERT INTO geoTable (name) VALUES (?)', name);
		savedResponse();
		console.log("Update is not firing");
		//cloudData.save(name)
		//make new file for cloud functions
	
}; 