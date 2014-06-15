/* Pomodoro.js */

Meteor.startup(function () {
	if (Meteor.isClient) {
		Modal.init();

		var email = 'teampomodoro@martindownton.eu';
		console.log(email);
		var email_md5 = CryptoJS.MD5(email);
		console.log(email_md5.toString());
	}
});