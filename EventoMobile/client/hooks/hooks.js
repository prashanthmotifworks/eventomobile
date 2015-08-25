Eventos.after.insert(function(userId, doc) {

	Session.setPersistent('EventoId', doc._id);
	Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 

});
Eventos.after.update(function(userId, doc) {	
	Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
		//Router.go('eventlist'); 
});


eSessions.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');	
});




eSessions.after.insert(function(userId, doc) {
	Session.setPersistent('SessionId', doc._id);
	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
});

eSessions.after.update(function(userId, doc) {	
	Router.go('esessionlist',{},{query: 'device='+ Session.get('device')}); 
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
//===========================================







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


Polls.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');
	doc.sessionid=Session.get('SessionId');	
});

PollAnswers.before.insert(function(userId, doc) {
	doc.eventid=Session.get('EventoId');
	doc.sessionid=Session.get('SessionId');	
	doc.pollid=Session.get('PollId');	
});