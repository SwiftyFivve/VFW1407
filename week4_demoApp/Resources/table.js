//organize these rows

var tableData = [];

var table = Ti.UI.createTableView();

var tableHolder = Ti.UI.createView({
	height : '600sp',
	width : '600sp',
	top : '800sp'
});

var ui = require('ui');

var settingTable = function() {
	table.setData(tableData);
	tableHolder.add(table);
	var t1 = Ti.UI.create2DMatrix();
	t1 = t1.translate(0, -500);
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1800;
	tableHolder.animate(a1);
	ui.mainWindow.add(tableHolder);
};

var runTable = function(dataObj) {
	//console.log('Did this Double?: ' + dataObj.title);

	//organize these rows
	var data = {
		title : dataObj.title,
		time : dataObj.time,
		venue : dataObj.venue,
		address : dataObj.address,
		city : dataObj.city,
		state : dataObj.state,
		zipCode : dataObj.zipcode,
		descrip : dataObj.descrip,
		photo : dataObj.url
	};

	var title = Ti.UI.createLabel({
		text : data.title,
		top : '5%',
		left : '2%'

	});
	var time = Ti.UI.createLabel({
		text : data.time,
		top : '50%',
		left : '2%'

	});
	var venue = Ti.UI.createLabel({
		text : data.venue,
		top : '5%',
		right : '2%'

	});
	var address = Ti.UI.createLabel({
		text : data.address,
		top : '25%',
		right : '2%'

	});
	var city = Ti.UI.createLabel({
		text : data.city + ", ",
		top : '45%',
		right : '6%'

	});
	var state = Ti.UI.createLabel({
		text : data.state,
		top : '45%',
		right : '2%'

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
			address : address.text,
			city : city.text,
			state : state.text,
			zipcode : zipcode.text,
			photo : photo.img
		},
	});
	row.add(title);
	row.add(time);
	row.add(venue);
	row.add(address);
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
