
Template.sessioncontentlist.helpers({
	getsessioncontents: function(){   
       return SessionContents.find({'sessionid':Session.get('SessionId')});
   }
})	;

Template.sessioncontentlist.events = {
	
	 'click #addsessioncontent': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.sessioncontentitems.events = {
	'click .sessioncontentitem': function(e,t){	
	   var eventcontentId= e.currentTarget.id;
       Session.setPersistent('SessionContentId', eventcontentId);
	   Router.go('sessioncontentdetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};