



Template.speakerdetail.helpers({
	getspeakerdetail: function(){   
       return Speakers.find({'_id':Session.get('SpeakerId')});
   }
})	;

Template.speakerdetail.events = {	
 'click .editspeaker': function(e,t){	
	   var speakerid= e.currentTarget.id;	
		Router.go('editspeaker',{}, {query: 'device='+Session.get('device') +'&_id='+speakerid }); 
	 }
	 };