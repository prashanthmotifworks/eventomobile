Sponsors = new Mongo.Collection('sponsors');

Sponsor = new SimpleSchema({
	title:        {type: String,      label: "Title",        max: 200 },
	description:  {type: String,      label: "Description",  max: 2000 ,  autoform: { rows: 2},  optional: true },	
	address:      {type: String,      label: "Address",      max: 800,    autoform: { rows: 2},   optional: true},
	type:         {type: String,      label: "Type",         allowedValues: ['silver', 'gold', 'platinum'],
	    													autoform : {
																	    options: [
																	    	{label: "Silver", value: "silver"},
																	    	{label: "Gold", value: "gold"},
																	    	{label: "Platinum", value: "platinum"}
																	    ]}},	

	logo:         {type: String,      label: "Description",  max: 2000,   optional:true}

});

Sponsors.attachSchema(Sponsor);

Sponsors.allow({
	insert: function(userId, doc){
		return doc && doc.userId === userId;
	},
	update: function(userId, doc){
		return doc && doc.userId === userId;
	},
	remove:  function(userId, doc){
		return doc && doc.userId === userId;
	}
});