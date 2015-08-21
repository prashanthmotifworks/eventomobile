Template.attendeedetail.helpers({
	getattendeedetail: function(){   
       return Attendees.find({'_id':Session.get('AttendeeId')});
   }
})	;