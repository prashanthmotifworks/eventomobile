Router.configure({
  //loadingTemplate: 'loadingTemplate',
  layoutTemplate: 'layout'

});

Router.map(function() {
	this.route('home'); 
//this.route('devicehome'); 
//this.route('menulist');
//this.route('iphonelayout');
//this.route('menulist');
// this.route('devicehome');
// this.route('speakerlist');



});


// Router.route('devicehome/:layoutname', function() {
//    this.render('devicehome');
//    if(this.params.layoutname!==undefined)
//    {
//       this.layout(this.params.layoutname);
//   }
//   else
//   {
//     this.layout('layout');
//   }
// });


// Router.route('menulist',
//  function() {
//   this.render('menulist');   
//   if(this.params.query.device!==undefined)
//   {
//    this.layout(this.params.query.device);
//  }
//  else
//  {  
//    this.layout('layout');
//  }  
// }
// );




Router.route('speakerlist', function() {
 this.render('speakerlist');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('addevent', function() {
 this.render('addevent');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('addesession', function() {
 this.render('addesession');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);


Router.route('addspeaker', function() {
 this.render('addspeaker');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('addattendee', function() {
 this.render('addattendee');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);




Router.route('eventmenu', function() {
 this.render('eventmenu');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('eventlist', function() {
 this.render('eventlist');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);




Router.route('esessionlist', function() {
 this.render('esessionlist');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('attendeelist', function() {
 this.render('attendeelist');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('speakerdetail', function() {
 this.render('speakerdetail');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('attendeedetail', function() {
 this.render('attendeedetail');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

// Router.route('editesession', function() {
//  this.render('editesession');
//  if(this.params.query.device!==undefined)
//  {
//    this.layout(this.params.query.device);
//  }
//  else
//  { 
//   this.layout('layout');
// }
// }
// );

Router.route('eventdetail', function() {
 this.render('eventdetail');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('esessiondetail', function() {
 this.render('esessiondetail');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

// Router.route('editeSession', 
// {      
//         path : '/editeSession/:_id',
//         layoutTemplate: function() {
//           console.log('param: '+this.params.device +', query:'+ this.params.query.device);
         
//           return this.params.device ==undefined?'layout':this.params.device;
//         },
//         data : function() {           
//             return eSessions.findOne({_id:this.params._id});
//         }
        
//     });



// Router.route('editevent', 
// {      
//         path : '/editevent/:_id',       
//         layoutTemplate: function() {
          
//           return this.params.device ==undefined?'layout':this.params.device;
//         },
//         data : function() {
           
//             return Eventos.findOne({_id:this.params._id});
//         }
        
//     });

Router.route('editesession', 
{      
        path : 'editesession',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           
            return eSessions.findOne({_id:this.params.query._id});
        }
        
    });



Router.route('editeventcontent', 
{      
        path : 'editeventcontent',       
        layoutTemplate: function() {
          return Session.get('device')==undefined ? 'layout': Session.get('device');
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           //
            return EventContents.findOne({_id:this.params.query._id});
        }
        
    });







Router.route('eventcontentlist', function() {
 this.render('eventcontentlist');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

Router.route('addeventcontent', function() {
 this.render('addeventcontent');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);

// Router.route('sessioncontentlist', function() {
//  this.render('sessioncontentlist');
//  if(this.params.query.device!==undefined)
//  {
//    this.layout(this.params.query.device);
//  }
//  else
//  { 
//   this.layout('layout');
// }
// }
// );

Router.route('eventcontentdetail', function() {
 this.render('eventcontentdetail');
 if(this.params.query.device!==undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('layout');
}
}
);



Router.route('editevent', 
{      
        path : 'editevent',       
        layoutTemplate: function() {     
         return Session.get('device')==undefined ? 'layout': Session.get('device');     
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {           
            return Eventos.findOne({_id:this.params.query._id});
        }
        
    });

Router.route('editspeaker', 
{      
        path : 'editspeaker',       
        layoutTemplate: function() {          
             return Session.get('device')==undefined ? 'layout': Session.get('device');

      // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           
            return Speakers.findOne({_id:this.params.query._id});
        }
        
    });

Router.route('editattendee', 
{      
        path : 'editattendee',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           
            return Attendees.findOne({_id:this.params.query._id});
        }
        
    });

Router.route('eventcontenttab', 
{      
        path : 'eventcontenttab',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('polldetail', 
{      
        path : 'polldetail',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

// Router.route('editpoll', 
// {      
//         path : 'editpoll',       
//         layoutTemplate: function() {
//            return Polls.get('device')==undefined ? 'layout': Session.get('device');        
//         }
        
//     });

Router.route('editpoll', 
{      
        path : 'editpoll',       
        layoutTemplate: function() {
          return Session.get('device')==undefined ? 'layout': Session.get('device');
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           
            return Polls.findOne({_id:this.params.query._id});
        }
        
    });

Router.route('pollanswer', 
{      
        path : 'pollanswer',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('polllist', 
{      
        path : 'polllist',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });


Router.route('addpoll', 
{      
        path : 'addpoll',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });


Router.route('menulist', 
{      
        path : 'menulist',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('addsessioncontent', 
{      
        path : 'addsessioncontent',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('sessioncontentlist', 
{      
        path : 'sessioncontentlist',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('editsession', 
{      
        path : 'editsession',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });

Router.route('sessioncontentdetail', 
{      
        path : 'sessioncontentdetail',       
        layoutTemplate: function() {
           return Session.get('device')==undefined ? 'layout': Session.get('device');        
        }
        
    });



Router.route('editsessioncontent', 
{      
        path : 'editsessioncontent',       
        layoutTemplate: function() {
          return Session.get('device')==undefined ? 'layout': Session.get('device');
         // return this.params.query.device ==undefined?'layout':this.params.query.device;
        },
        data : function() {
           //
            return SessionContents.findOne({_id:this.params.query._id});
        }
        
    });





