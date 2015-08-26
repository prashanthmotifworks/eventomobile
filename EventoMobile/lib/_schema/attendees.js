Attendees =  new Mongo.Collection('attendees');
Attendee = new SimpleSchema({

	eventid:      {type: String,    label: "eventid",          max: 200 , optional: true , autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	sessionid:    {type: String,    label: "sessionid",        max: 200 , optional: true, autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	fname:        {type: String,    label: "First Name",       max: 200,   optional: true   },
	lname:        {type: String,    label: "Last Name",        max: 200,   optional: true   },
	designation:  {type: String,    label: "Designation",      max: 200,   optional: true   },
 	department :  {type: String,    label: "Org/Department",   max: 200,   optional: true   },
	phone:        {type: String,    label: "Phone",            max: 200,   optional: true   },
	details:      {type: String,    label: "description",      max: 9000,  optional: true   },
	email:        {type: String,    label: "Email",            max: 200,   optional: true   },
	profilepath:  {type: String,   label: "File Path",         max:2000,   optional: true   },
	isconfirmed:  {type: Boolean,   label: "isconfirmed",     defaultValue:false , optional: true , autoform: { type: "hidden"} }

});

Attendees.attachSchema(Attendee);

Attendees.allow({
	insert: function(userId, doc){		
		return doc && doc.userId === userId;
	},
	update: function(userId, doc){
		return doc && doc.userId === userId;
	},
	remove:  function(userId, doc){
		return doc && doc.userId === userId;
	}
});
