
Template.editeSession.helpers({
	selectedeSession: function(){   
       return eSessions.findOne({_id:Session.get('SessionId')});
   }
})	;