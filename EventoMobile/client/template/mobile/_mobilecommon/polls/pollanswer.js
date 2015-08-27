Template.pollanswer.helpers({
	getpollinfo: function(){   
       return Polls.findOne({_id:Session.get('PollId')});
   },

  questionoptions: function () {
    var  values= Polls.findOne({_id:Session.get('PollId')});
    //.map(function (c) {
      
      //return [{label:c.optiona , value: '1'}, {label:c.optionb , value: '2'},{label:c.optionc , value: '1'} ;
      // return _.map([values.optiona, values.optionb, values.optionc. values.optiond, values.optione], function (c, i) {
      //     return {label: c, value: c};
      return [{name:values.optiona},{name:values.optionb},
      		  {name:values.optionc},{name:values.optiond}].map(function (c,i) {
      return {label: c.name, value: i};
 

    });
  },
  question:function(){
  	return Polls.findOne({_id:Session.get('PollId')});
  }
});


Template.pollanswer.events = {	
	'click #savepollanswer ': function(e,t){	
	//	var option= $(":radio:checked").map(idSelector).get();

	   var answer={};
	   answer.eventid= Session.get('EventoId');
	   answer.sessionid=Session.get('SessionId');
	   answer.userid='';
	   answer.pollid=Session.get('PollId');
	   answer.optiona=$('[id="A"]').is(':checked');
	   answer.optionb=$('[id="B"]').is(':checked');
	   answer.optionc=$('[id="C"]').is(':checked');
	   answer.optiond=$('[id="D"]').is(':checked');
	   answer.optione=$('[id="E"]').is(':checked');
	   answer.comment= $('#comment').val();
        
       var status= PollAnswers.insert({'eventid':answer.eventid,  'sessionid':answer.sessionid,  'userid':answer.userid,
        					'pollid':answer.pollid,    'optiona':answer.optiona,     'optionb':answer.optionb,
        					'optionc':answer.optionc,  'optiond':answer.optiond,    'optione':answer.optione,  'comment':answer.comment
        });
	}
};