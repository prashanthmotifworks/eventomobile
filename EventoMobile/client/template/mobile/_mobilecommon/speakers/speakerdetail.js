



Template.speakerdetail.helpers({
	getspeakerdetail: function(){   
       return Speakers.find({'_id':Session.get('SpeakerId')});
   }
})	;

Template.speakerdetail.events = {	
 'click .editspeaker': function(e,t){	
	   var speakerid= e.currentTarget.id;
		//Router.go('editspeaker',{_id:speakerid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
		Router.go('editspeaker',{_id:speakerid},{query: 'device='+ Session.get('device')}); 
	 }
	 };