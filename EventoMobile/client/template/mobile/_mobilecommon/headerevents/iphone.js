Template.iphone.events({
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



	'click [data-action=editsession]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=addesessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	},
	'click [data-action=editsessioncontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('SessionContentId')}); 
	},
	'click [data-action=editeventcontent]': function(e, t) {
		var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')+'&_id='+Session.get('SessionContentId')}); 
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
	}
	

	

});














