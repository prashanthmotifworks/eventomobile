Template.ipadmini.events({
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
	}

});