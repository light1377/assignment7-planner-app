// make variable to show date:
var date = moment().format('dddd MMMM Do');

// add date variable to paragraph with id currentDay in head section:
currentDay.append(date);

let currentTime = moment();

$(“.hour”).each(function () {

  var comparedHour = $(this).attr(“hour”);
  if (currentTime.hour() > comparedHour) {

  }
  else if (currentTime.hour() == comparedHour) {


  }
  else {


  }



});
