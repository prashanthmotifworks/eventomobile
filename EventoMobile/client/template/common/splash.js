Template.splash.events = {
	'click #launcherimg': function(){
	
		Router.go('menulist',{layoutname: Session.get('device')}); 
	}
};