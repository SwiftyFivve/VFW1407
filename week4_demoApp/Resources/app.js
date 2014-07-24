//Jordan Weaver
//AVF Final Project 
//Week 3 & 4
//1407

//finished

var Cloud = require('ti.cloud');
Cloud.debug = true; //as we are in Development mode

if(Titanium.Network.networkType == Titanium.Network.NETWORK_NONE){ 
var alertDialog = Titanium.UI.createAlertDialog({
              title: 'WARNING!',
              message: 'Your device is not online.',
              buttonNames: ['OK']
            });
            alertDialog.show();
}else{

Cloud.Users.login({
    login: 'admindemo',
    password: '12345'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e))
        );
    }
});

var ui = require('ui');
var table = require('table');
var api = require('api');
var geo = require('geo');

ui.mainWindow.open();

};