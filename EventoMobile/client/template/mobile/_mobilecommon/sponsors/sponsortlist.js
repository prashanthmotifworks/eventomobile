
Template.sponsorlist.helpers({
	getsponsorlist: function(){   
       return Sponsors.find({});
   }
});




// Template.sponsorlist.events = {
// 	'click .eventitem': function(e,t){	
// 		var eventid= e.currentTarget.id;
//        Session.setPersistent('EventoId', eventid);
// 	   Router.go('menulist',{},{query: 'device='+ Session.get('device')}); 
// 	}
// }