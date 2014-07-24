var infoWindow = Ti.UI.createWindow({
	backgroundImage : '/img/background.jpg',
});

var detailPage = function(labels) {

	console.log('Line 6: ' + labels.title);

	var logo = Ti.UI.createImageView({
		image : '/img/rocknrollpetrock2.jpg',
		top : '23%',
		height : '150dp',
		width : '250dp'
	});

	mainWindow.add(logo);

	var titleLabel = Ti.UI.createLabel({
		text : labels.title,
		top : '25%',
		color : 'black',
		font : {
			fontSize : '40dp'
		},
		left : '7%'
	});
	infoWindow.add(titleLabel);
	infoWindow.open();
};

exports.detailPage = detailPage;
