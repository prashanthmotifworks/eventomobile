Template.registerHelper("prettifyDate", function(timestamp) {
    var curr_date = timestamp.getDate();
    var curr_month = timestamp.getMonth();
    curr_month++;
    var curr_year = timestamp.getFullYear();
    result = curr_date + "/" + curr_month + "/" + curr_year;
    return result;
});


Template.esessiondetail.helpers({
	getSessionInfo: function(){   
       return eSessions.find({_id:Session.get('SessionId')});
   },
    getAttendeeInfo :function(attendeeid){
    	return Attendees.findOne({_id:attendeeid}).email;
    },
    getSpeakerInfo :function(speakerid){
    	return Speakers.findOne({_id:speakerid}).email;
    }

});

Template.esessiondetail.events = {
	
	 'click .editsession': function(e,t){	
	   var sessionid= e.currentTarget.id;
		Router.go('editeSession',{_id:sessionid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
	 }

};