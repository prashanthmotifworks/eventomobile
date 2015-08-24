
Template.sessioncontentlist.helpers({
	getsessioncontents: function(){   
       return SessionContents.find({'sessionid':Session.get('EventoId')});
   }
})	;

Template.sessioncontentlist.events = {
	
	 'click #addsessioncontent': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.sessioncontentitems.events = {
	'click .eventcontentitem': function(e,t){	
	   var eventcontentId= e.currentTarget.id;
       Session.setPersistent('EventContentId', eventcontentId);
	   Router.go('sessioncontentdetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};