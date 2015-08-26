Eventos.after.insert(function(userId, doc) {

	Session.setPersistent('EventoId', doc._id);
	Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 

});
Eventos.after.update(function(userId, doc) {	
	//Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
		window.location.replace('/eventlist?device='+Session.get('device'));
});


eSessions.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');	
});




eSessions.after.insert(function(userId, doc) {
	Session.setPersistent('SessionId', doc._id);
	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
});

eSessions.after.update(function(userId, doc) {	
//	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
window.location.replace('/esessionlist?device='+Session.get('device'));
});

//=============================================EventContent==========================
EventContents.after.insert(function(userId, doc) {
	//Session.setPersistent('SessionId', doc._id);
	Router.go('eventcontentlist',{},{query: 'device='+ Session.get('device')}); 
});

EventContents.after.update(function(userId, doc) {	
//	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
window.location.replace('/eventcontentlist?device='+Session.get('device'));
});


//=============================================SPEAKERS==========================

Speakers.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');
	doc.sessionid=Session.get('SessionId');	
});

Speakers.after.insert(function(userId, doc) {

	Session.setPersistent('SpeakerId', doc._id);	

	var files =  $("input[name='profilepath']")[0].files;

				S3.upload({files:files,path:"Evento"
				}, 

				function(error, s3Url){

				var status=  Speakers.update( doc._id, { $set: { profilepath: s3Url.url } });

				});

				Router.go('speakerlist',{},{query: 'device='+ Session.get('device')}); 
});


Speakers.after.update(function(userId, doc) {	
//	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
window.location.replace('/speakerlist?device='+Session.get('device'));
});
//===========================================Attendee







Attendees.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');
	doc.sessionid=Session.get('SessionId');	
});	

Attendees.after.insert(function(userId, doc) {
	Session.setPersistent('AttendeeId', doc._id);
	var files =  $("input[name='profilepath']")[0].files;

				S3.upload({files:files,path:"Evento"
				}, 

				function(error, s3Url){

				var status=  Attendees.update( doc._id, { $set: { profilepath: s3Url.url } });

				});

				
	Router.go('attendeelist',{},{query: 'device='+ Session.get('device')}); 
});

Attendees.after.update(function(userId, doc) {	
//	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
window.location.replace('/attendeelist?device='+Session.get('device'));
});

//==============================

Polls.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');
	doc.sessionid=Session.get('SessionId');	
});

PollAnswers.before.insert(function(userId, doc) {
	// doc.eventid=Session.get('EventoId');
	// doc.sessionid=Session.get('SessionId');	
	// doc.pollid=Session.get('PollId');	
});

PollAnswers.after.insert(function(userId, doc) {
window.location.replace('/polllist?device='+Session.get('device'));
});