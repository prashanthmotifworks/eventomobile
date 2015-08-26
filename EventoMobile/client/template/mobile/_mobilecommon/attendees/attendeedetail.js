Template.attendeedetail.helpers({
	getattendeedetail: function(){   
       return Attendees.find({'_id':Session.get('AttendeeId')});
   }
})	;

Template.attendeedetail.events = {	
 'click .editattendee': function(e,t){	
	   var attendeeId= e.currentTarget.id;	
		Router.go('editattendee',{}, {query: 'device='+Session.get('device') +'&_id='+attendeeId }); 
	 }
	 };