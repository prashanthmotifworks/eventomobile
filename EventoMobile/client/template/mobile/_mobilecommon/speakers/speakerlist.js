
Template.speakerlist.helpers({
	getspeakers: function(){   
       return Speakers.find({'eventid':Session.get('EventoId')});
   }
})	;
Template.speakerlist.events = {
	
	 'click #addspeaker': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }

};


Template.speakeritems.events = {
	'click .speakeritem': function(e,t){	
	   var speakerid= e.currentTarget.id;
       Session.setPersistent('SpeakerId', speakerid);
	  Router.go('speakerdetail',{},{query: 'device='+ Session.get('device')}); 
	 }

};