Template.polldetail.helpers({
	getPollInfo: function(){   
       return Polls.find({_id:Session.get('PollId')});
   }

});

Template.polldetail.events = {	
	 'click .editpoll ': function(e,t){	
	   var pollid= e.currentTarget.id;
		Router.go('editpoll',{_id:pollid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
	 },
	 'click #submit ': function(e,t){	

	  // var option= $(":radio:checked").map(idSelector).get();

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

	Router.go('polllist',{},{query: 'device='+ Session.get('device')}); 
	//	Router.go('editpoll',{_id:pollid,'device':Session.get('device')},{query: 'device='+ Session.get('device')}); 
	 }

	 

};