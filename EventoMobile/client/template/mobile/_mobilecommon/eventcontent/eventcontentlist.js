
Template.eventcontentlist.helpers({
	geteventcontents: function(){   
       return EventContents.find({'eventid':Session.get('EventoId')});
   }
})	;
Template.eventcontentlist.events = {
	
	 'click #addeventcontent': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.eventcontentitems.events = {
	'click .eventcontentitem': function(e,t){	
	   var eventcontentId= e.currentTarget.id;
       Session.setPersistent('EventContentId', eventcontentId);
	   Router.go('eventcontentdetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.eventcontentitems.helpers({
isjpeg: function(srctype) {
 		if(srctype==="image/jpeg")
 			return true;
 	},
 	ispng: function(srctype) {
 		if(srctype==="image/png")
 			return true;
 	},
 	ispdf: function(srctype) {
 		if(srctype==="application/pdf")
 			return true;
 	},
 	isdoc:function(srctype) {
 		if(srctype==="application/vnd.openxmlformats-officedocument.wordprocessingml.document")
 			return true;
 	},
 	isexcel:function(srctype) {
 		if(srctype==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
 			return true;
 	},
 	filesizeinkb:function(filesize) {
 		   
 			return parseInt(filesize/1000)+"kb";
 	}});