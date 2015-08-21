

// Template.home.helpers({
// 	mobiletype: function(){		      
//        return Session.get('device')==undefined ? "iphone":Session.get('device');
//    }
// })

Template.home.rendered = function () {
   Session.setDefault('device', 'layout');
};


Template.home.events = {
	'click #desktop': function(){
		Session.setPersistent('device', 'layout');
		Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
	 },	
	 'click #android': function(){
	 	Session.setPersistent('device', 'android');
	 	Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
	 },
	'click #iphone': function(){
		Session.setPersistent('device', 'iphone');
		Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
	},
	'click #ipadmini': function(){
		Session.setPersistent('device', 'ipadmini');
		Router.go('eventlist',{},{query: 'device='+ Session.get('device')}); 
	}

};
