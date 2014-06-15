Settings = new Meteor.Collection("settings");

Settings.allow({
	update: function() {	return true;	},
});