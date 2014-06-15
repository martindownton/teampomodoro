/* Pomodoro.js */

Meteor.startup(function () {
	if (Meteor.isClient) {
		Modal.init();
	}
});