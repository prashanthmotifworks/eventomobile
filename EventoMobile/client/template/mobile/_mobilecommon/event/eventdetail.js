

Template.eventdetail.helpers({
	getEventInfo: function(){   
       return Eventos.find({_id:Session.get('EventoId')});
   }
});

Template.eventdetail.events = {
	
	 'click .editevent': function(e,t){	
	   var eventid= e.currentTarget.id;

		//Router.go('editevent',{_id:eventid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
		Router.go('editevent',{}, {query: 'device='+Session.get('device') +'&_id='+eventid }); 
	 }

};