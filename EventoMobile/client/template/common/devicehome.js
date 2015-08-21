Template.devicehome.helpers({
	hometype: function(){		      
       return Session.get('device')==undefined ? "iphone":Session.get('device');
   }
})
