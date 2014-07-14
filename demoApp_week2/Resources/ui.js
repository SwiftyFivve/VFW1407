var geo = require('geo');
var win = Ti.UI.createWindow(
	backgroundColor = 'white'
);
var button = Ti.UI.createButton({
	title : 'Get Locaction',
	top : 100,
	width : 100,
	height : 50
});

button.addEventListener('click', function(e){
	geo.runGeo();
});
// var mapview = Ti.Map.createView({
    // mapType: Ti.Map.STANDARD_TYPE,
    // region: {latitude:37.389569, longitude:-122.050212,
            // latitudeDelta:0.1, longitudeDelta:0.1},
    // animate:true,
    // regionFit:true,
    // userLocation:false
// });
// win.add(mapview);
win.add(button);

win.open();

