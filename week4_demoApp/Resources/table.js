//organize these rows

var tableData = [];

var table = Ti.UI.createTableView();

// var tableOptions = Ti.UI.createView({
	// height : '765sp',
	// width :'700sp',
	// top : '720sp',
	// backgroundColor : '#FAAC58',
	// borderRadius : '10dp'
// });

var tableHolder = Ti.UI.createView({
	height : '780sp',
	width : '700sp',
	top : '720sp',
	borderRadius : '15dp'
});

// var getZip = require('geo').getZip();
// console.log(getZip);

// var zipButton = Ti.UI.createButton({
	// title : 'Zip: ',
	// height : '70sp',
	// width : '32.5%',
	// top : '0%',
	// right : '0%',
	// borderColor : 'black',
	// borderWidth : '1dp',
	// borderRadius : '20%'
// });
// tableOptions.add(zipButton);

var ui = require('ui');

var settingTable = function() {
	table.setData(tableData);
	tableHolder.add(table);
	//tableOptions.add(tableHolder);
	var t1 = Ti.UI.create2DMatrix();
	t1 = t1.translate(0, -500);
	var a1 = Ti.UI.createAnimation();
	a1.transform = t1;
	a1.duration = 1800;
	tableHolder.animate(a1);
	ui.mainWindow.add(tableHolder);
};

var runTable = function(dataObj) {

	//organize these rows
	var data = {
		title : dataObj.title,
		time : dataObj.time,
		venue : dataObj.venue,
		address : dataObj.address,
		city : dataObj.city,
		state : dataObj.state,
		zipcode : dataObj.zipCode,
		descrip : dataObj.descrip,
		site : dataObj.site,
		photo : dataObj.url
	};
	zipData = data.zipcode;
	//Important console.log to track the movement of API data
	//console.log('Line 42: '+data.site);
	var titleRow = Ti.UI.createView({
		width : '25%',
		height : 'auto',
		left : '0%',
		top : '0%'
	});
	var title = Ti.UI.createLabel({
		text : data.title,
		font : {
			fontWight : 'bold'
		},
		top : '40%',
		left : '3%'

	});
	titleRow.add(title);
	var time = Ti.UI.createLabel({
		text : data.time,
		top : '5%',
	});
	var at = Ti.UI.createLabel({
		text : '-At-',
		top : '36%',
	});
	var venue = Ti.UI.createLabel({
		text : data.venue,
		bottom : '5%',
	});
	var arrow = Ti.UI.createImageView({
		image : 'img/next.png',
		top : '25%',
		height : '40%',
		width : '5%',
		right : '2%'
	});
	var address = Ti.UI.createLabel({
		text : data.address,
	});
	var city = Ti.UI.createLabel({
		text : data.city + ", ",
	});
	var state = Ti.UI.createLabel({
		text : data.state,
	});
	var zipcode = Ti.UI.createLabel({
		text : data.zipcode,
	});
	var descrip = Ti.UI.createLabel({
		text : data.descrip,
	});
	var site = Ti.UI.createLabel({
		text : data.site,
	});
	var photo = Ti.UI.createImageView({
		img : data.photo,
	});
	//Important console.log to track the movement of API data
	console.log('Line 47: ' + address.text);

	var row = Ti.UI.createTableViewRow({
		className : 'row',
		objName : 'row',
		touchEnabled : true,
		height : '80dp',
		data : {
			title : title.text,
			time : time.text,
			venue : venue.text,
			address : address.text,
			city : city.text,
			state : state.text,
			zipcode : zipcode.text,
			descrip : descrip.text,
			site : site.text,
			photo : photo.img
		},
	});
	
	//var stg = data.time.split
	
	row.add(titleRow);
	row.hide(title);
	row.add(time);
	row.add(venue);
	row.hide(address);
	row.hide(city);
	row.hide(state);
	row.hide(zipcode);
	row.hide(descrip);
	row.hide(site);
	row.add(photo);
	row.add(at);
	row.add(arrow);
	
	tableData.push(row);
	settingTable();
};

var infoPage = require('infoPage');

table.addEventListener('click', function(e) {
	var labels = e.rowData.data;
	//Important console.log to track the movement of API data
	//console.log(e.rowData.data.address);
	infoPage.detailPage(labels);
});

exports.tableHolder = tableHolder;
exports.runTable = runTable;
