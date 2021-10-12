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

$('.row').each(function(element){

  //var currentTime = "hour-04";
  //console.log(element)
  var hourString = $(this).attr("id");
  var hourId = parseInt(hourString);
  console.log(hourId);
  //currentTime = $("#currentTime").val();
  currentTime = parseInt(momentTime);
  console.log(currentTime);
  
  if(hourId <= currentTime < hourId+100 ){
    $('input').removeClass("past future");
    $('input').addClass("present");
  }else if(currentTime <= hourId){
    $('input').removeClass("present past");
    $('input').addClass("future");
  }else if(hourId <= currentTime){
    $('input').removeClass("present future");
    $('input').addClass("past");
  }
})



