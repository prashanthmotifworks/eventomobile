SessionContents = new Mongo.Collection('sessioncontents');
SessionContent  = new SimpleSchema({                
                 sessionid:       { type: String,     label: "SessionId",      max: 200,   optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                                        afFormGroup: {label: false }}},
                 title:           { type: String,     label: "Title",          max: 200,   optional: true },
                 description:     { type: String,     label: "Description",    max: 200,   optional: true },
                 fileextension:   { type: String,     label: "File Extension", max: 200,   optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                                        afFormGroup: {label: false }}},
                 filesize:        { type: String,     label: "File Size",      max: 20,    optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                                        afFormGroup: {label: false }}},
                 path:            { type: String,     label: "File Path",      max:2000,   optional: true, autoform: { afFieldInput: {type: "hidden" }, 
                                                                                                        afFormGroup: {label: false }}}

});

 SessionContents.attachSchema(SessionContent);

SessionContents.allow({
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