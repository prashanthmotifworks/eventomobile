Template.sessioncontentdetail.helpers({
    filedetail: function(){
        return SessionContents.find({_id:Session.get('SessionContentId')});
    }
})

Template.sessioncontentdetail.events = {
	
	 'click .editsessioncontent': function(e,t){	
	   var sessioncontentid= e.currentTarget.id;

		//Router.go('editevent',{_id:eventid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
		Router.go('editsessioncontent',{}, {query: 'device='+Session.get('device') +'&_id='+sessioncontentid }); 
	 }

};