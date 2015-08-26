Template.devicehome.helpers({
	hometype: function(){		      
       return Session.get('device')==undefined ? "layout":Session.get('device');
   }
})
