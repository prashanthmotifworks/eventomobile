EventContents = new Mongo.Collection('eventcontents');
EventContent  = new SimpleSchema({
                 eventid:         { type: String,     label: "SessionId",      max: 200, optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                                        afFormGroup: {label: false }}},            
                 title:           { type: String,     label: "Title",          max: 200, optional: true, },
                
                 description:     { type: String,     label: "Description",    max: 200, optional: true },
                 originalname:    { type: String,     label: "FileName",       max: 200, optional: true, autoform: { type: "hidden" }},   
                 // optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                 //                                                                              afFormGroup: {label: false }}},
                 fileextension:   { type: String,     label: "File Extension", max: 200,    optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                              afFormGroup: {label: false }}},
                 filesize:        { type: String,     label: "File Size",      max: 20,    optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                              afFormGroup: {label: false }}},
                 path:            { type: String,     label: "File Path",      max:2000,   optional: true,  autoform: { afFieldInput: {type: "hidden" }, 
                                                                                              afFormGroup: {label: false }}}

});

 EventContents.attachSchema(EventContent);

EventContents.allow({
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


