Settings = new Meteor.Collection("settings");

Settings.allow({
	insert: function() {	return true;	},
	update: function() {	return true;	},
});