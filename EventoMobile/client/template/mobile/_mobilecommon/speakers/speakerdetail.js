



Template.speakerdetail.helpers({
	getspeakerdetail: function(){   
       return Speakers.find({'_id':Session.get('SpeakerId')});
   }
})	;