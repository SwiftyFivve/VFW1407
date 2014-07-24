//Display more in table rows

var db;
//Create Database
var createDatabase = db = Titanium.Database.open('concert');

db.execute('CREATE TABLE IF NOT EXISTS concertTable (id INTEGER PRIMARY KEY, title TEXT)');

var createRows = function() {
	var newData = [];
	var rows = db.execute('SELECT * FROM concertTable');
	while (rows.isValidRow()) {
		newData.push({
			title : rows.fieldByName('title')
		});
		rows.next();
	}
	return newData;
	//console.log("Line 17: " + newData);
};
//Display more in table rows

var favTable = Ti.UI.createTableView({
	height : "auto",
	width : "auto",
	left : "30sp",
	right : "50sp",
});

var savedResponse = function(e) {
	var info = [];
	var data = createRows();
	for (var i = 0; i < data.length; i++) {
		var label = Ti.UI.createLabel({
			text : data[i].title,
			height : 'auto',
			width : 'auto',
			color : 'black',
			font : {
				fontSize : 20,
			},
		});
		
		var row = Ti.UI.createTableViewRow({
			height : '60dp',
			//clickable : true,
			data : {
				title : data[i].title
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

exports.save = function(title) {
	db.execute('INSERT INTO concertTable (title) VALUES (?)', title);
	savedResponse();
	console.log("Line 53: " + title);
	//close db
	//cloudData.save(name)
	//make new file for cloud functions
};