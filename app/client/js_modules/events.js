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
		Members.insert({
			username:	tmpl.find('[name="member_name"]').value,
			userimage:	"krieger.png",
			time:		"25:00",
			status:		"Waiting to Start",
			controls:	[
				{action: "ctl_start_pomodori", content: "start pomodori"}
			],
			extraclass:	""
    	});
		Modal.hide();
    }
});

Template.delete_member.events = {
	'click .delete' : function (event) {
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