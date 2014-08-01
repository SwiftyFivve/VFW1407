//Display more in table rows

var db;

//Create Database
var createDatabase = db = Titanium.Database.open('concert');
db.execute('CREATE TABLE IF NOT EXISTS concertTable (id INTEGER PRIMARY KEY, title TEXT, day TEXT, time TEXT, photo TEXT, venue TEXT, address TEXT, city TEXT, descrip TEXT)');

var createRows = function() {
	var newData = [];
	//open database
	var rows = db.execute('SELECT * FROM concertTable');
	while (rows.isValidRow()) {
		newData.push({
			title : rows.fieldByName('title'),
			day : rows.fieldByName('day'),
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
	height : '90%',
	width : '90%',
	top : '10%'
});

var savedResponse = function(e) {
	var info = [];
	var data = createRows();
	for (var i = 0; i < data.length; i++) {
		var label = Ti.UI.createLabel({
			text : data[i].title,
			font : {
				fontSize : '20dp',
				fontWeight : 'bold'
			},
			top : '15%',
			left : '3%',
			width : '50%',
			height : '20%'
		});

		var time = Ti.UI.createLabel({
			text : 'Starts @: ' + data[i].time,
			font : {
				fontFamily : 'Heiti K',
				fontStyle : 'italic'
			},
			color : 'gray',
			bottom : '5%',
			left : '3%'
		});
		var venue = Ti.UI.createLabel({
			text : data[i].venue,
			color : 'gray',
			left : '3%',
			top : '40%',
		});
		var arrow = Ti.UI.createImageView({
			image : 'img/next.png',
			top : '25%',
			height : '43%',
			width : '5%',
			right : '2%'
		});

		var row = Ti.UI.createTableViewRow({
			height : '80dp',
			//clickable : true,
			data : {
				title : data[i].title,
				day : data[i].day,
				time : data[i].time,
				photo : data[i].photo,
				venue : data[i].venue,
				address : data[i].address,
				city : data[i].city,
				descrip : data[i].descrip
			}
		});
		row.add(label);
		row.add(time);
		row.add(venue);
		row.add(arrow);
		info.push(row);
		favTable.setData(info);
		//console.log('Line 43 ' + row.data.name);
	}
};
savedResponse();

var favDetail = require('favDetail');
favTable.addEventListener('click', function(e) {
	var data = e.rowData.data;
	favDetail.favDetailFunc(data);
	//console.log('Line 74: '+ e.rowData.data.title);
});

exports.savedResponse = savedResponse();
exports.favTable = favTable;

exports.save = function(saveData) {
	db.execute('INSERT INTO concertTable (title, day, time, photo, venue, address, city, descrip) VALUES (?,?,?,?,?,?,?,?)', saveData.title, saveData.day, saveData.time, saveData.photo, saveData.venue, saveData.address, saveData.city, saveData.descrip);
	savedResponse();
	console.log("Line 53: " + saveData.title);
	//db.close();
	//close db
	//cloudData.save(name)
	//make new file for cloud functions
};
