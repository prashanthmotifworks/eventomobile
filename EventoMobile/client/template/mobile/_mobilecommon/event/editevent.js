Template.editevent.helpers({
	selectedEvent: function(){   
       return Eventos.findOne({_id:Session.get('EventId')});
   }
})	;