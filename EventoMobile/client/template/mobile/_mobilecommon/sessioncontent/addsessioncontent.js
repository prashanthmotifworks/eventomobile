





function   SaveCollection(e,fileobj) { 

var content1 = {
    title:$('input.title').val(),
    description:$('.description').val(),
    originalname:fileobj.file.original_name,
    fileextension:fileobj.file.type,
    filesize:fileobj.file.size,
    path:fileobj.url,    
    sessionid:Session.get('SessionId')
};

  var sessioncontentid=SessionContents.insert(content1, function insert(e){

   });

  Session.setPersistent('SessionContentId',sessioncontentid);
}

Template.addsessioncontent.events({
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

Template.addsessioncontent.helpers({
    "files": function(){
        return S3.collection.find();
    }
})