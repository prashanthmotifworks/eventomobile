
Template.polllist.helpers({
	getpollquestions: function(){   
       return Polls.find({eventid:Session.get('EventoId')});
   }
});

Template.polllist.events = {
	'click .addpoll': function(e,t){	
	    var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
     
	 }
};

Template.pollitems.events = {
	'click .pollitem': function(e,t){	
	   var pollid= e.currentTarget.id;
       Session.setPersistent('PollId', pollid);
	   Router.go('polldetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};