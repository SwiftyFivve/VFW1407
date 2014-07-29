//Display more in table rows

var db;

//Create Database
var createDatabase = db = Titanium.Database.open('concert');
db.execute('CREATE TABLE IF NOT EXISTS concertTable (id INTEGER PRIMARY KEY, title TEXT, time TEXT, photo TEXT, venue TEXT, address TEXT, city TEXT, descrip TEXT)');

var createRows = function() {
	var newData = [];
	//open database
	var rows = db.execute('SELECT * FROM concertTable');
	while (rows.isValidRow()) {
		newData.push({
			title : rows.fieldByName('title'),
			time : rows.fieldByName('time'),
			photo : rows.fieldByName('photo'),
			venue : rows.fieldByName('venue'),
			address : rows.fieldByName('address'),
			city : rows.fieldByName('city'),
			descrip : rows.fieldByName('descrip')
		});
		rows.next();
	}
	//db.close();
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
				title : data[i].title,
				time : data[i].time,
				venue : data[i].venue,
				address : data[i].address,
				city : data[i].city,
				descrip : data[i].descrip
			}
		});
		row.add(label);
		info.push(row);
		favTable.setData(info);
		//console.log('Line 43 ' + row.data.name);
	}
};
savedResponse();

var favDetail = require('favDetail');
favTable.addEventListener('click', function(e){
	var data = e.rowData.data;
	favDetail.favDetailFunc(data);
	//console.log('Line 74: '+ e.rowData.data.title);
});

exports.savedResponse = savedResponse();
exports.favTable = favTable;


exports.save = function(saveData) {
	db.execute('INSERT INTO concertTable (title, time, photo, venue, address, city, descrip) VALUES (?,?,?,?,?,?,?)', saveData.title, saveData.time, saveData.photo, saveData.venue, saveData.address, saveData.city, saveData.descrip);
	savedResponse();
	console.log("Line 53: " + saveData.title);
	//db.close();
	//close db
	//cloudData.save(name)
	//make new file for cloud functions
};