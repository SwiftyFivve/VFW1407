//organize these rows

var tableData = [];

var table = Ti.UI.createTableView();

var tableHolder = Ti.UI.createView({
	height : '600sp',
	width : '600sp'
});

var ui = require('ui');

var settingTable = function() {
	table.setData(tableData);
	tableHolder.add(table);
	ui.mainWindow.add(tableHolder);
};

var runTable = function(dataObj) {
	//console.log('Did this Double?: ' + dataObj.title);

	//organize these rows
	var data = {
		title : dataObj.title,
		time : dataObj.time,
		venue : dataObj.venue,
		city : dataObj.city,
		state : dataObj.state,
		zipCode : dataObj.zipcode,
		descrip : dataObj.descrip,
		photo : dataObj.url
	};

	var title = Ti.UI.createLabel({
		text : data.title,
		top : '2%',
		left : '2%'

	});
	var time = Ti.UI.createLabel({
		text : data.time,
		top : '50%',
		left : '2%'

	});
	var venue = Ti.UI.createLabel({
		text : data.venue,

	});
	var city = Ti.UI.createLabel({
		text : data.city,

	});
	var state = Ti.UI.createLabel({
		text : data.state,

	});
	var zipcode = Ti.UI.createLabel({
		text : data.zipcode,

	});
	var photo = Ti.UI.createImageView({
		img : data.photo,
	});
	//console.log('Line 47: ' + title.text);

	var row = Ti.UI.createTableViewRow({
		className : 'row',
		objName : 'row',
		touchEnabled : true,
		height : 100,
		data : {
			title : title.text,
			time : time.text,
			venue : venue.text,
			city : city.text,
			state : state.text,
			zipcode : zipcode.text,
			photo : photo.img
		},
	});
	row.add(title);
	row.add(time);
	row.add(venue);
	row.add(city);
	row.add(state);
	row.add(zipcode);
	row.add(photo);
	
	tableData.push(row);
	settingTable();
};

var infoPage = require('infoPage');

table.addEventListener('click', function(e) {
	var labels = e.rowData.data;
	console.log(e.rowData.data.title);
	infoPage.detailPage(labels);
});

exports.tableHolder = tableHolder;
exports.runTable = runTable;
