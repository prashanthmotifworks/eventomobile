eSessions = new Mongo.Collection('eSessions');  //testing autoform

eSession = new SimpleSchema({

// 	evento: 	 { type: [String], 	label: "Event" , autoform: {
// 		options: function() {
// 			return _.map(Eventos.find().fetch(), function(evento) {
// 				return {
// 					label: evento.title,
// 					value: evento._id
// 				};
// 			});
// 		}
// 	}
// },
eventid:      {type: String,    label: "eventid",       max: 200 , optional: true , autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
title:       {  type: String, 	label: "Title",   max: 200  },
starttime:   {  type: Date,     label: "Start Time",
autoform: {
	afFieldInput: {
		type: "bootstrap-datetimepicker"
	}
}
},
endtime:     {  type: Date,     label: "End Time",
autoform: {
	afFieldInput: {
		type: "bootstrap-datetimepicker"
	}
}
},
description: {  type: String,   label: "Description"  },

speaker: 	 { type: [String], 	label: "Select speaker" , autoform: {
	options: function() {
		return _.map(Speakers.find().fetch(), function(speaker) {
			return {
				label: speaker.fname + " " + speaker.lname,
				value: speaker._id
			};
		});
	}
}
},

attendee: 	 { type: [String], 	label: "Select attendee" , autoform: {
	options: function() {
		return _.map(Attendees.find().fetch(), function(attendee) {
			return {
				label: attendee.fname + " " + attendee.lname,
				value: attendee._id
			};
		});
	}
}
},

            // speakers:     {type: [Profile],   label: "Speakers(email)" ,    defaultValue: [],   optional: true},
            //attendees:    {type: [Profile],   label: "Attendees",    defaultValue: [] ,  optional: true},
            //speakers:    {  type: [String],  label: "Speakers" ,  optional:true},
            //attendees:   {  type: [String],  label: "Attendees",  optional:true},
            //contents:     {type: [Content],   label: "Longitude", max: 40 ,  optional: true}
        });

eSessions.attachSchema(eSession);
// ESessions.allow({
//   insert: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   update: function(userId, doc){
//         return doc && doc.userId === userId;
//       },
//   remove:  function(userId, doc){
//         return doc && doc.userId === userId;
//       }
// });
