Speakers =  new Mongo.Collection('speakers');
Speaker = new SimpleSchema({
				   eventid:      {type: String,    label: "eventid",       max: 200 , optional: true , autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
				   sessionid:    {type: String,    label: "sessionid",       max: 200 , optional: true, autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	        	   fname:        {type: String,    label: "First Name",       max: 200 },
 				   lname:        {type: String,    label: "Last Name",        max: 200 },
 				   designation:  {type: String,    label: "Designation",        max: 200 },
 				   department :  {type: String,    label: "Org/Department",        max: 200 },
 				   phone:        {type: String,    label: "Phone",            max: 200 },
 				   details:      {type: String,    label: "description",          max: 9000 },
 				   email:        {type: String,     label: "Email",           max: 200 },
 				   profilepath:  {type: String,     label: "File Path",      max:2000,   optional: true  },
 				   isconfirmed:  {type: Boolean,    label: "isconfirmed",    defaultValue:false , autoform: { type: "hidden"} }

 				});

Speakers.attachSchema(Speaker);

Speakers.allow({
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
