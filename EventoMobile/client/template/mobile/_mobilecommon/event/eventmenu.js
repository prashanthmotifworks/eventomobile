Template.eventmenu.events = {
	'click .eventmenuitem': function(e,t){	
	   var nextscreen= e.currentTarget.id;
		Router.go(nextscreen,{},{query: 'device='+ Session.get('device')}); 
	 }
};