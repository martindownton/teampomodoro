Members = new Meteor.Collection("members");

Members.allow({
	/* Define CRUD methods and data validations */
	insert: function() {
		return true;
	}
});