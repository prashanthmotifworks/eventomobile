Template.eventcontentdetail.helpers({
    filedetail: function(){
        return EventContents.find({_id:Session.get('EventContentId')});
    }
})

Template.eventcontentdetail.events = {
	
	 'click .editeventcontent': function(e,t){	
	   var eventid= e.currentTarget.id;

		//Router.go('editevent',{_id:eventid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
		Router.go('editeventcontent',{}, {query: 'device='+Session.get('device') +'&_id='+eventid }); 
	 }

};