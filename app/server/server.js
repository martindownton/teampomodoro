/* Make member data available to the client - can customise what fields are available */
Meteor.publish("members", function() {
    return Members.find();
});

Meteor.startup(function () {
    /* Temporary place holder member data */
    
    if (Members.find().count() === 0) {
        var members = [
        {
			username: 	"Sterling",
			userimage: 	"sterling.jpg",
			time: 		"25:00",
			status: 	"Waiting to Start",
			controls: 	[
				{action: "ctl_start_pomodori", content: "start pomodori"}
			],
			extraclass:	""
		},
		{
			username:	"Lana",
			userimage:	"lana.png",
			time: 		"23:45",
			status: 	"Busy Working Hard",
			controls: 	[
				{action: "ctl_exit", content: "exit"}
			],
			extraclass:	"busy owner"
		},
		{
			username:	"Malory",
			userimage:	"malory.jpg",
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
			userimage:	"cheryl.png",
			time:		"04:56",
			status:		"On a Break",
			controls:	[
				{action: "ctl_exit", content: "exit"}
			],
			extraclass:	"break"
		},
		{
			username:	"Pam",
			userimage:	"pam.png",
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