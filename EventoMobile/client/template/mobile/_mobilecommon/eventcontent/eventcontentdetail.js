Template.eventcontentdetail.helpers({
    filedetail: function(){
        return EventContents.find({_id:Session.get('EventContentId')});
    }
})