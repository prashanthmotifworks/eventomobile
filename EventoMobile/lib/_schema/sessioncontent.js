SessionContents = new Mongo.Collection('sessioncontents');
SessionContent  = new SimpleSchema({                
                 sessionid:       { type: String,     label: "SessionId",      max: 200 },
                 title:           { type: String,     label: "Title",          max: 200 },
                 description:     { type: String,     label: "Description",    max: 200 },
                 fileextension:   { type: String,     label: "File Extension", max: 200,    optional: true  },
                 filesize:        { type: String,     label: "File Size",      max: 20,    optional: true  },
                 path:            { type: String,     label: "File Path",      max:2000,   optional: true  }

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