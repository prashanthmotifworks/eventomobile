Template.mobile.events({
	'click [data-action=addevent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addattendee]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addesession]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addeventcontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addpoll]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addsessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addspeaker]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
		'click [data-action=addesessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},



	'click [data-action=editesession]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('SessionId')}); 
	},
	'click [data-action=editsessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('SessionContentId')}); 
	},
	'click [data-action=editeventcontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('EVentContentId')}); 
	},
	'click [data-action=editevent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('EventoId')}); 
	},
	'click [data-action=editspeaker]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('SpeakerId')}); 
	},
	'click [data-action=editattendee]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('AttendeeId')}); 
	},



    'click [data-action=deleteevent]': function(e, t) {
		var nextscreen= e.currentTarget.id;  
		var status= Eventos.remove({_id:Session.get('EventoId')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=deleteeventcontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		var status= EventContents.remove({_id:Session.get('EventContentID')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=deletesessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		var status= SessionContents.remove({_id:Session.get('SessionContentID')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=deleteesession]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		var status= eSessions.remove({_id:Session.get('SessionId')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=deletespeaker]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		var status= Speakers.remove({_id:Session.get('SpeakerId')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=deleteattendee]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		var status= Speakers.remove({_id:Session.get('AttendeeId')});
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},


	



	'click [data-action=backsessionlist]': function(e, t) {
		var nextscreen= e.currentTarget.id;		
		if(nextscreen == 'home')
			Session.setPersistent('device', 'layout');	
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=backmenulist]': function(e, t) {
		var nextscreen= e.currentTarget.id;		
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	}

	

	

});














