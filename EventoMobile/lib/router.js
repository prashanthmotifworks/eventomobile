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
//    if(this.params.layoutname!=undefined)
//    {
//       this.layout(this.params.layoutname);
//   }
//   else
//   {
//     this.layout('iphone');
//   }
// });


Router.route('menulist',
 function() {
  this.render('menulist');   
  if(this.params.query.device!=undefined)
  {
   this.layout(this.params.query.device);
 }
 else
 {  
   this.layout('iphone');
 }  
}
);




Router.route('speakerlist', function() {
 this.render('speakerlist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('addevent', function() {
 this.render('addevent');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('addesession', function() {
 this.render('addesession');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);


Router.route('addspeaker', function() {
 this.render('addspeaker');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('addattendee', function() {
 this.render('addattendee');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('addpoll', function() {
 this.render('addpoll');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('pollanswer', function() {
 this.render('pollanswer');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('eventmenu', function() {
 this.render('eventmenu');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('eventlist', function() {
 this.render('eventlist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);



Router.route('polllist', function() {
 this.render('polllist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('esessionlist', function() {
 this.render('esessionlist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('attendeelist', function() {
 this.render('attendeelist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('speakerdetail', function() {
 this.render('speakerdetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('attendeedetail', function() {
 this.render('attendeedetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('editesession', function() {
 this.render('editesession');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('eventdetail', function() {
 this.render('eventdetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('esessiondetail', function() {
 this.render('esessiondetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('editeSession', 
{      
        path : '/editeSession/:_id',
        layoutTemplate: function() {
          console.log('param: '+this.params.device +', query:'+ this.params.query.device);
         
          return this.params.device ==undefined?'iphone':this.params.device;
        },
        data : function() {           
            return eSessions.findOne({_id:this.params._id});
        }
        
    });


Router.route('editevent', 
{      
        path : '/editevent/:_id',       
        layoutTemplate: function() {
          
          return this.params.device ==undefined?'iphone':this.params.device;
        },
        data : function() {
           
            return Eventos.findOne({_id:this.params._id});
        }
        
    });




Router.route('polldetail', function() {
 this.render('polldetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);


Router.route('editpoll', 
{      
        path : '/editpoll/:_id',       
        layoutTemplate: function() {
                
          return this.params.device ==undefined?'iphone':this.params.device;
        },
        data : function() {           
            return Polls.findOne({_id:this.params._id});
        }
        
    });

Router.route('eventcontentlist', function() {
 this.render('eventcontentlist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('addeventcontent', function() {
 this.render('addeventcontent');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('sessioncontentlist', function() {
 this.render('sessioncontentlist');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);

Router.route('eventcontentdetail', function() {
 this.render('eventcontentdetail');
 if(this.params.query.device!=undefined)
 {
   this.layout(this.params.query.device);
 }
 else
 { 
  this.layout('iphone');
}
}
);


Router.route('editspeaker', 
{      
        path : '/editspeaker/:_id',       
        layoutTemplate: function() {
                
          return this.params.device ==undefined?'iphone':this.params.device;
        },
        data : function() {           
            return Speakers.findOne({_id:this.params._id});
        }
        
    });



