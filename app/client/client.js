/* Subscribe to the data model published by the server */
Meteor.subscribe("members");

Template.members.membercollection = function() {
    return Members.find();
}

Template.controls.events({
    'click a#new_member' : function (event) {
		event.preventDefault();
		var add_member = UI.render(Template.add_member);
		Modal.show('Add New Member');
		UI.insert(add_member, $('.modal .content')[0]);
	},
    'click a#delete_member' : function (event) {
		event.preventDefault();
		Template.delete_member.membercollection = function() {
			return Members.find();
		}
		var delete_member = UI.render(Template.delete_member);
		Modal.show('Delete Member');
		UI.insert(delete_member, $('.modal .content')[0]);
	}
});

Template.add_member.events({
	'submit': function (event, tmpl) {
        event.preventDefault();
		Modal.hide();
		Members.insert({
			username:	"Krieger",
			userimage:	"krieger.png",
			time:		"12:34",
			status:		"Busy Working Hard",
			controls:	[
				{action: "ctl_alert", content: "alert me when complete"}
			],
			extraclass:	"busy"
    	});
    }
});

Template.delete_member.events = {
	'click .delete' : function (event, mbr, mbr2) {
		event.preventDefault();
		Modal.hide();
		Members.remove(this._id);
	}
}

Template.modal.events({
	'click .close' : function (event) {
		event.preventDefault();
		Modal.hide();
	}
});

if (Meteor.isClient) {
	Modal = new Meteor.Collection("modal");

	Modal.init = function() {
		Modal.el = $('.modal');
		Modal.content = Modal.el.find('.content');
		Modal.title = Modal.el.find('.title');
	}
	Modal.show = function(title) {
		Modal.el.addClass('show');
		$('body').addClass('lb');
		Modal.title.html(title);
	}
	Modal.hide = function() {
		Modal.el.removeClass('show');
		$('body').removeClass('lb');
		Modal.content.html('');
	}

	Meteor.startup(function () {
		Modal.init();
	});
}