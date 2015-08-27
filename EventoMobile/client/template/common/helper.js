Template.registerHelper("isNull", function(value) {
  return value === null;
});

Template.registerHelper("isNotNull", function(value) {
  return value !== null;
});

Template.registerHelper("isUndefined", function(value) {
  return value === undefined;
});

Template.registerHelper("isNotUndefined", function(value) {
  return value !== undefined;
});

Template.registerHelper("prettifyDate", function(timestamp) {
    var curr_date = timestamp.getDate();
    var curr_month = timestamp.getMonth();
    curr_month++;
    var curr_year = timestamp.getFullYear();
    result = curr_date + "/" + curr_month + "/" + curr_year;
    return result;
});


Template.registerHelper("filesizeinmb", function(filesize) {
   return parseInt(filesize/1000000)+"MB";
});

 
