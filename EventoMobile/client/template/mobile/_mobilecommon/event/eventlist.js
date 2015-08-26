
Template.eventlist.helpers({
	getevents: function(){   
       return Eventos.find({});
   }
});





// Template.eventlist.events = {
	
	
// 		'click [data-action=addevent]': function(e, y) {
// 	 	alert('addevent');
	  
// 	 }

// };




Template.eventitems.events = {
	'click .eventitem': function(e,t){	
		var eventid= e.currentTarget.id;
       Session.setPersistent('EventoId', eventid);
	   Router.go('menulist',{},{query: 'device='+ Session.get('device')}); 
	}
}

