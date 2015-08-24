
Template.eventlist.helpers({
	getevents: function(){   
       return Eventos.find({});
   }
});

Template.eventlist.events = {
	
	 'click #addevent': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};




Template.eventitems.events = {
	'click .eventitem': function(e,t){	
		var eventid= e.currentTarget.id;
       Session.setPersistent('EventoId', eventid);
	   Router.go('menulist',{},{query: 'device='+ Session.get('device')}); 
	}
}

