/* Subscribe to the data model published by the server */
Meteor.subscribe("members");

Template.members.membercollection = function() {
    return Members.find();
}