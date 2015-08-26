var currentfileupload;





function   SaveCollection(e,fileobj) {

    // var content1 =new object();
    // content1.title= $('.title').val();
    // content1.description= $('.description').val();
    // content1.fileextension= fileobj;
    // content1.filesize= fileobj;
    // content1.path= fileobj;
    // content1.sessionid= Router.current().params.query.SessionId;

var content1 = {
    title:$('input.title').val(),
    description:$('.description').val(),
    originalname:fileobj.file.original_name,
    fileextension:fileobj.file.type,
    filesize:fileobj.file.size,
    path:fileobj.url,    
    eventid:Session.get('EventoId')
};

  var eventcontentid=EventContents.insert(content1, function insert(e){

   });

  Session.setPersistent('EventContentId',eventcontentid);
}

Template.addeventcontent.events({
    "click button.upload": function(e){
        var files = $("input.file_bag")[0].files

       var result= S3.upload({
                files:files,
                path:"Evento"
            },function(err,r){

                     if (err)
                     {
                         throw new Meteor.Error("Upload Error: " + err.reason);
                     }
                     else {

                          SaveCollection(e,r);
                     }



                console.log(r);
        });
    }
})

Template.addeventcontent.helpers({
    "files": function(){
        return S3.collection.find();
    }
})