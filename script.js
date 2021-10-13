//var userTaskEl = document.getElementById("userTask");
// var timeSlotEl = document.getElementById("timeSlot");
// var saveBtnEl = document.querySelector("#saveBtn");


 var userTaskEl = $('#userTask');
// var timeSlotEl = $('timeSlot');
// var saveBtnEl = $('saveBtn');

var momentTime = moment().format("HHmm");
//var time = moment().add(12, 'hours');
$("#currentTime").text(momentTime);

$(document).ready(function(){
  $("#saveBtn").click(function(){
    const task = $("#userTask").val();
    console.log(task);
    localStorage.setItem("task", task);
   // localStorage.getItem(task) = userTaskEl.text();

  })
})

$('.row').each(function (element) {
  console.log(element)
  //var currentTime = "hour-04";
  //console.log(element)
  var hourString = $(this).attr("id");
  var hourId = parseInt(hourString);
  console.log(hourId);
  //currentTime = $("#currentTime").val();
  currentTime = parseInt(momentTime);
  console.log(currentTime);

  

  // if (hourId <= currentTime && currentTime < nextSlot) {
  //   //console.log('hello')
  //   //$('input').removeClass("past future").addClass("present");
  //   //element.classList = ["row", "present"]
  //   //console.log(element.classList)
    
  // }  else if (hourId < currentTime) {
  //   //$('input').removeClass("present future").addClass("past");
  //   // element.classList = ["row", "past"]
  //   // console.log(element.classList)
    
  // }else {
  //   //$('input').removeClass("present past").addClass("future");
  //   //element.classList = ["row", "future"]
  //   //console.log(element.classList)
    
  // }


  if (hourId > currentTime) {
    $("#userTask").removeClass("present past").addClass("future");
  }else if (hourId < currentTime) {
    $("#userTask").removeClass("future present").addClass("past");
  } else {
  // which covers the equals
    $("#userTask").removeClass("future past").addClass("present");
  }

})



