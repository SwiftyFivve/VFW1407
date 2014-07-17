var db;
//Create Database
var createDatabase = db = Titanium.Database.open('geo');

db.execute('CREATE TABLE IF NOT EXISTS geoTable (id INTEGER PRIMARY KEY, name TEXT)');

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
	console.log("Line 17: " + newData);
};

var favTable = Ti.UI.createTableView({
	height : "auto",
	width : "auto",
	left : "30sp",
	right : "50sp",
	backgroundColor : '#DF0101'
});

var savedResponse = function(e) {
	var info = [];
	var data = createRows();
	for (var i = 0; i < data.length; i++) {
		var label = Ti.UI.createLabel({
			text : data[i].name,
			height : 'auto',
			width : 'auto',
			color : 'white',
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
		row.add(label);
		info.push(row);
		favTable.setData(info);
		//console.log('Line 43 ' + row.data.name);
	}
};
savedResponse();

exports.savedResponse = savedResponse();
exports.favTable = favTable;

exports.save = function(label) {
	db.execute('INSERT INTO geoTable (name) VALUES (?)', label);
	savedResponse();
	console.log("Line 53: " + label);
	//close db
	//cloudData.save(name)
	//make new file for cloud functions

};
