
Template.attendeelist.helpers({
	getattendees: function(){   
       return Attendees.find({'eventid':Session.get('EventoId')});
   }
})	;
Template.attendeelist.events = {
	
	 'click #addattendee': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.attendeeitems.events = {
	'click .attendeeitem': function(e,t){	
	   var attendeeid= e.currentTarget.id;
       Session.setPersistent('AttendeeId', attendeeid);
	   Router.go('attendeedetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};