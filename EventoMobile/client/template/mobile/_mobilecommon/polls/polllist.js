
Template.polllist.helpers({
	getpollquestions: function(){   
       return Eventos.find({eventid:Session.get('Evento')});
   }
});

Template.polllist.events = {
	'click .pollitem': function(e,t){	
	   var eventid= e.currentTarget.id;
     
	 }
};