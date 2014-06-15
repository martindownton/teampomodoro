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
	},
    'click a#edit_settings' : function (event) {
		event.preventDefault();
		Template.settings.settingcollection = function() {
			return Settings.find();
		}
		var settings = UI.render(Template.settings);
		Modal.show('Settings');
		UI.insert(settings, $('.modal .content')[0]);
	}
});

Template.add_member.events({
	'submit': function (event, tmpl) {
        event.preventDefault();
		var email =	tmpl.find('[name="member_email"]').value;
		var email_md5 =	CryptoJS.MD5(email).toString();
		Members.insert({
			username:	tmpl.find('[name="member_name"]').value,
			userimage:	"http://www.gravatar.com/avatar/" + email_md5 + '?s=200',
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

Template.delete_member.events({
	'click .delete' : function (event) {
		event.preventDefault();
		Modal.hide();
		Members.remove(this._id);
	}
});

Template.settings.events({
	'submit': function (event, tmpl) {
		event.preventDefault();
		tmpl.findAll('input.setting').each(function(input) {
			Settings.update($(this).attr('name'), {
				$set: {value: $(this)[0].value}
			});
		});
		Modal.hide();
	}
})

Template.modal.events({
	'click .close' : function (event) {
		event.preventDefault();
		Modal.hide();
	}
});