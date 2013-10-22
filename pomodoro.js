if (Meteor.isClient) {
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

	Template.members.membercollection = function() {
		members = [
			{
				username: 	"Sterling",
				userimage: 	"http://images1.wikia.nocookie.net/__cb20100221034242/archer/images/d/d5/Sterling.jpg",
				time: 		"25:00",
				status: 	"Waiting to Start",
				controls: 	[
					{action: "ctl_start_pomodori", content: "start pomodori"}
				],
				extraclass:	""
			},
			{
				username:	"Lana",
				userimage:	"http://images4.wikia.nocookie.net/__cb20110213005818/archer/images/thumb/f/f3/Lana.png/250px-Lana.png",
				time: 		"23:45",
				status: 	"Busy Working Hard",
				controls: 	[
					{action: "ctl_exit", content: "exit"}
				],
				extraclass:	"busy owner"
			},
			{
				username:	"Malory",
				userimage:	"http://images3.wikia.nocookie.net/__cb20100418103125/archer/images/thumb/5/5d/Maloryarcher.jpg/233px-Maloryarcher.jpg",
				time:		"25:00",
				status:		"Finished Pomodori",
				controls:	[
					{action: "ctl_start_break", content: "start break"},
					{action: "ctl_exit", content: "exit"}
				],
				extraclass:	"complete"
			},
			{
				username:	"Cheryl",
				userimage:	"http://images4.wikia.nocookie.net/__cb20110213005944/archer/images/thumb/b/b3/Cheryl.png/233px-Cheryl.png",
				time:		"04:56",
				status:		"On a Break",
				controls:	[
					{action: "ctl_exit", content: "exit"}
				],
				extraclass:	"break"
			},
			{
				username:	"Pam",
				userimage:	"http://images2.wikia.nocookie.net/__cb20110213010123/archer/images/thumb/d/da/Pam.png/233px-Pam.png",
				time:		"05:00",
				status:		"Finished Break",
				controls:	[
					{action: "ctl_start_pomodori", content: "start pomodori"}
				],
				extraclass:	"completebreak"
			},
			{
				username:	"Krieger",
				userimage:	"http://images3.wikia.nocookie.net/__cb20110213005457/archer/images/thumb/f/fc/Krieger.png/233px-Krieger.png",
				time:		"12:34",
				status:		"Busy Working Hard",
				controls:	[
					{action: "ctl_alert", content: "alert me when complete"}
				],
				extraclass:	"busy"
			}
		];

		return members;
	}
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
