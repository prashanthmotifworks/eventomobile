EventContents = new Mongo.Collection('eventcontents');
EventContent  = new SimpleSchema({
                 eventid:         { type: String,     label: "SessionId",      max: 200, optional: true },                
                 title:           { type: String,     label: "Title",          max: 200 },
                
                 description:     { type: String,     label: "Description",    max: 200 },
                 originalname:    { type: String,     label: "FileName",    max: 200 },
                 fileextension:   { type: String,     label: "File Extension", max: 200,    optional: true  },
                 filesize:        { type: String,     label: "File Size",      max: 20,    optional: true  },
                 path:            { type: String,     label: "File Path",      max:2000,   optional: true  }

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


