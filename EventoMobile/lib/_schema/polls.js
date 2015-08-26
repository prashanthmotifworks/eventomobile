Polls = new Mongo.Collection('polls');

Poll = new SimpleSchema({
	 			 eventid:         { type: String,     label: "EventId",        max: 200,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, 
	 			 																														afFormGroup: {label: false }}},
	 			 sessionid:       { type: String,     label: "SessionId",      max: 200,    optional: true,  autoform: { afFieldInput: {type: "hidden" },
	 			 																														afFormGroup: {label: false }}},
                 title:           { type: String,     label: "Title",          max: 2000,   optional: true , autoform: { rows: 2}},
                 optiona:         { type: String,     label: "Option A",       max: 200,    optional: true  },
                 optionb:         { type: String,     label: "Option B",       max: 200,    optional: true  },
                 optionc:         { type: String,     label: "Option C",       max: 200,    optional: true },
                 optiond:         { type: String,     label: "Option D",       max: 200,    optional: true },
                 optione:         { type: String,     label: "Option E",       max: 200,    optional: true },
                 comment:         { type: String,     label: "Comment",        max: 200,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }} },


                 acount:          { type: Number,     label: "ACount",         max: 10,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }}},
                 bcount:          { type: Number,     label: "BCount",         max: 10,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }}},
                 ccount:          { type: Number,     label: "CCount",         max: 10,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }}},
                 dcount:          { type: Number,     label: "DCount",         max: 10,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }}},
                 ecount:          { type: Number,     label: "ECount",         max: 10,    optional: true,  autoform: { afFieldInput: {type: "hidden" }, afFormGroup: {label: false }}}
	
});

Polls.attachSchema(Poll);

Polls.allow({
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