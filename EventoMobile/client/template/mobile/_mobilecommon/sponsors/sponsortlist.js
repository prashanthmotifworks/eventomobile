
Template.sponsorsrow.helpers({
	getsponsorlist: function(){   
       return Sponsors.find({});
   },
   getplatinumsponsors:function(){
   	return Sponsors.find({type:'platinum'});
   },
    getgoldsponsors:function(){
   	return Sponsors.find({type:'gold'});
   },
    getsilversponsors:function(){
   	return Sponsors.find({type:'silver'});
   },

   loopCount: function(count){
    var countArr = [];
    for (var i=0; i<count; i++){
      countArr.push({});
    }
    return countArr;
  }
});




// Template.sponsorlist.events = {
// 	'click .eventitem': function(e,t){	
// 		var eventid= e.currentTarget.id;
//        Session.setPersistent('EventoId', eventid);
// 	   Router.go('menulist',{},{query: 'device='+ Session.get('device')}); 
// 	}
// }