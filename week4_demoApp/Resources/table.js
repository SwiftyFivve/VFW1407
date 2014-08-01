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
		day : dataObj.day,
		time : dataObj.time,
		venue : dataObj.venue,
		address : dataObj.address,
		city : dataObj.city,
		state : dataObj.state,
		zipcode : dataObj.zipCode,
		descrip : dataObj.descrip,
		site : dataObj.site,
		photo : dataObj.url,
		theDay : dataObj.theDay,
		theMonth : dataObj.theMonth,
		theYear : dataObj.theYear
	};
	zipData = data.zipcode;
	//Important console.log to track the movement of API data
	//console.log('Line 42: '+data.day);
	var title = Ti.UI.createLabel({
		text : data.title,
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		top : '15%',
		left : '3%',
		width : '50%',
		height : '20%'

	});

	var theDay = Ti.UI.createLabel({
		text : data.theDay,
		font : {
			fontSize : '25dp',
			fontFamily : 'Heiti K'
		},
		color : 'gray',
		right : '13%',
		top : '15%'
	});

	var theMonth = Ti.UI.createLabel({
		text : data.theMonth,
		font : {
			fontFamily : 'Heiti K',
			fontWeight : 'bold'
		},
		right : '15.5%',
		bottom : '15%'
	});

	var theYear = Ti.UI.createLabel({
		text : data.theYear,
		font : {
			fontFamily : 'Heiti K',
		},
		color : 'red',
		right : '12%',
		bottom : '15%'
	});

	var dayView = Ti.UI.createImageView({
		image : 'img/dateT.png',
		layout : 'vertical',
		height : 'auto',
		width : '10%',
		right : '10%',
		top : '30%'
	});
	var time = Ti.UI.createLabel({
		text : 'Starts @: '+data.time,
		font : {
			fontFamily : 'Heiti K',
			fontStyle : 'italic'
		},
		color : 'gray',
		bottom : '5%',
		left : '3%'
	});
	var venue = Ti.UI.createLabel({
		text : data.venue,
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
	
	//Important console.log to track the movement of API data
	//console.log('Line 47: ' + day.text);

	var row = Ti.UI.createTableViewRow({
		className : 'row',
		objName : 'row',
		touchEnabled : true,
		height : '80dp',
		data : {
			title : title.text,
			day : data.day,
			time : time.text,
			venue : venue.text,
			address : data.address,
			city : data.city,
			state : data.state,
			zipcode : data.zipcode,
			descrip : data.descrip,
			site : data.site,
			photo : data.photo
		},
	});

	row.add(title);
	row.add(theDay);
	row.add(theMonth);
	row.add(theYear);
	row.add(dayView);
	row.add(time);
	row.add(venue);
	row.add(arrow);

	tableData.push(row);
	settingTable();
};

var infoPage = require('infoPage');

table.addEventListener('click', function(e) {
	var labels = e.rowData.data;
	//Important console.log to track the movement of API data
	console.log(e.rowData.data.day);
	infoPage.detailPage(labels);
});

exports.tableHolder = tableHolder;
exports.runTable = runTable;
