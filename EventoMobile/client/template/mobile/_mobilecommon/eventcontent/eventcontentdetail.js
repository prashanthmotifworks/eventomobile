Template.eventcontentdetail.helpers({
    filedetail: function(){
        return EventContents.find({eventid:Session.get('EventoId')});
    }
})