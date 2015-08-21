Template.polldetail.helpers({
	getPollInfo: function(){   
       return Polls.find({_id:Session.get('PollId')});
   }

});

Template.polldetail.events = {	
	 'click .editpoll ': function(e,t){	
	   var pollid= e.currentTarget.id;
		Router.go('editpoll',{_id:pollid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
	 }

};