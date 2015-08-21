
Template.esessionlist.helpers({
	getsessions: function(){   
       return eSessions.find({'eventid':Session.get('EventoId')});
   }
})	;
Template.esessionlist.events = {
	
	 'click #addesession': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.sessionitems.events = {
	'click .esessionitem': function(e,t){	
	   var sessionid= e.currentTarget.id;
       Session.setPersistent('SessionId', sessionid);
	   Router.go('esessiondetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};