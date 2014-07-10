var db;
//Create Database
var createDatabase = db = Titanium.Database.open('weather');

db.execute('CREATE TABLE IF NOT EXISTS weatherTable (id INTEGER PRIMARY KEY, cityState TEXT, currentTemp TEXT, weather TEXT, icon TEXT)');

var createRows = function() {
	var newData = [];
	var rows = db.execute('SELECT * FROM weatherTable');
	while (rows.isValidRow()) {
		newData.push({
			id : rows.fieldByName('id'),
			cityState : rows.fieldByName('cityState'),
			currentTemp : rows.fieldByName('currentTemp'),
			weather : rows.fieldByName('weather'),
			icon : rows.fieldByName('icon')
		});
		rows.next();
	}
	return newData;
};

// var savedResponse = function() {
	// var info = [];
	// var data = createRows();
	// for (var i = 0; i < data.length; i++) {
		// var label = Ti.UI.createLabel({
			// text : data[i].title,
			// height : 'auto',
			// width : 'auto',
			// font : {
				// fontSize : 20,
			// },
		// });
// 
		// var row = Ti.UI.createTableViewRow({
			// height : '60dp',
			// //clickable : true,
			// data : {
				// id : data[i].id,
				// title : data[i].title,
				// author : data[i].author,
				// subreddit : data[i].subreddit
			// }
		// });
		// row.add(label);
		// info.push(row);
		// favTable.setData(info);
	// }
// };
// 
// savedResponse();
var api = require('api');

exports.save = function() {// instead of if ID, if argument.hasOwnProperty (id), as a string update else save new one camelcase
	// if (myObj.hasOwnProperty('id')) {
		// db.execute('UPDATE weatherTable SET cityState=?, currentTemp=?, weather=?, icon=? WHERE id=?', myObj.cityState, myObj.currentTemp, myObj.weather, myObj.icon, myObj.id);
		// console.log(myObj);
	// } else {
		db.execute('INSERT INTO weatherTable (cityState, currentTemp, weather, icon) VALUES (?,?,?,?)', myObj.cityState, myObj.currentTemp, myObj.weather, myObj.icon);
	// }
};