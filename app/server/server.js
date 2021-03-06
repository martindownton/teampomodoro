/* Make member data available to the client - can customise what fields are available */
Meteor.publish("members", function() {
    return Members.find();
});

Meteor.startup(function () {
    
    if (Settings.find().count() === 0) {
    	console.log('applying default settings');
	    Settings.insert({
	    	isort:			1,
	    	key:			'pomodori_length',
	    	name:			'Pomodori Length',
	    	value:			25,
	    	editable:		true,
	    });
	    Settings.insert({
	    	isort:			2,
	    	key:			'break_length',
	    	name:			'Break Length',
	    	value:			5,
	    	editable:		true,
	    });
	    Settings.insert({
	    	isort:			3,
	    	key:			'break_length_long',
	    	name:			'Long Break Length',
	    	value:			15,
	    	editable:		true,
	    });
	    Settings.insert({
	    	isort:			4,
	    	key:			'cycles',
	    	name:			'Cycles',
	    	description:	'The number of cycles before a long break occurs',
	    	value:			4,
	    	editable:		true,
	    });
    } else {
    	console.log('using existing settings');
    }

    if (Members.find().count() === 0) {
	    /* Temporary place holder member data */
        var members = [
        {
			username: 	"Sterling",
			userimage: 	"images/sterling.jpg",
			time: 		"25:00",
			status: 	"Waiting to Start",
			controls: 	[
				{action: "ctl_start_pomodori", content: "start pomodori"}
			],
			extraclass:	""
		},
		{
			username:	"Lana",
			userimage:	"images/lana.png",
			time: 		"23:45",
			status: 	"Busy Working Hard",
			controls: 	[
				{action: "ctl_exit", content: "exit"}
			],
			extraclass:	"busy owner"
		},
		{
			username:	"Malory",
			userimage:	"images/malory.jpg",
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
			userimage:	"images/cheryl.png",
			time:		"04:56",
			status:		"On a Break",
			controls:	[
				{action: "ctl_exit", content: "exit"}
			],
			extraclass:	"break"
		},
		{
			username:	"Pam",
			userimage:	"images/pam.png",
			time:		"05:00",
			status:		"Finished Break",
			controls:	[
				{action: "ctl_start_pomodori", content: "start pomodori"}
			],
			extraclass:	"completebreak"
		},
		/*
		{
			username:	"Krieger",
			userimage:	"krieger.png",
			time:		"12:34",
			status:		"Busy Working Hard",
			controls:	[
				{action: "ctl_alert", content: "alert me when complete"}
			],
			extraclass:	"busy"
		}
		*/
		];
		
		for (var i = 0; i < members.length; i++) {
		    Members.insert({
    			username:	members[i].username,
    			userimage:	members[i].userimage,
    			time:		members[i].time,
    			status:		members[i].status,
    			controls:	members[i].controls,
    			extraclass:	members[i].extraclass
        	});
		}
    	console.log('not-loaded')
    } else {
    	console.log('pre-loaded')
    }
});