PollAnswers = new Mongo.Collection('pollanswers');

PollAnswer = new SimpleSchema({
	 			 eventid:         { type: String,     label: "EventId",        max: 200,    optional: true, autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	 			 sessionid:       { type: String,     label: "SessionId",      max: 200,    optional: true , autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	 			 userid:          { type: String,     label: "UserId",         max: 200,    optional: true, autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	 			 pollid :         { type: String,     label: "pollid",         max: 200, optional: true },                 
                 optiona:         { type: String,     label: "Option A",       max: 200,  optional: true  },
                 optionb:         { type: String,     label: "Option B",       max: 200,  optional: true  },
                 optionc:         { type: String,     label: "Option C",       max: 200,   optional: true },
                 optiond:         { type: String,     label: "Option D",       max: 200,   optional: true },
                 optione:         { type: String,     label: "Option E",       max: 200,   optional: true },
				 comment:         { type: String,     label: "Comment",        max: 200,   optional: true }

                 
	
});

PollAnswers.attachSchema(PollAnswer);

PollAnswers.allow({
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