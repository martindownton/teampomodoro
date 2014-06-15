/* Subscribe to the data model published by the server */
Meteor.subscribe("members");

Template.members.membercollection = function() {
    return Members.find();
}

Meteor.startup(function () {
	if (Meteor.isClient) {
		Modal.init();
	}
});