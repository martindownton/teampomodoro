	/*
	Template.hello.greeting = function () {
		return "Welcome to pomodoro.";
	};

	Template.hello.events({
	'click input' : function () {
		// template data, if any, is available in 'this'
			if (typeof console !== 'undefined')
				console.log("You pressed the button");
		}
	});

	Template.member.username = function() {
		return "!Sterling!";
	}
	Template.member.userimage = function() {
		return "http://images1.wikia.nocookie.net/__cb20100221034242/archer/images/d/d5/Sterling.jpg"
	};
	Template.member.time = function() {
		return "25:00"
	};
	Template.member.status = function() {
		return "Waiting to Start"
	};
	Template.member.controls = function() {
		return [
			{action: "ctl_start_break", content: "start break"},
			{action: "ctl_exit", content: "exit"}
		]
	};
	Template.member.extraclass = function() {
		return " break owner"
	};
	*/
	
/* Subscribe to the data model published by the server */
Meteor.subscribe("members");

Template.members.membercollection = function() {
    return Members.find();
}

Template.controls.events({
    'click a#new_member' : function (event) {
	// template data, if any, is available in 'this'
		if (typeof console !== 'undefined')
			console.log(event.target.href)
	}
});