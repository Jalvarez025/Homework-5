//var userTaskEl = document.getElementById("userTask");
// var timeSlotEl = document.getElementById("timeSlot");
// var saveBtnEl = document.querySelector("#saveBtn");


 var userTaskEl = $('#userTask');
// var timeSlotEl = $('timeSlot');
// var saveBtnEl = $('saveBtn');
var inputField = $('#1')

var momentTime = moment().format("HHmm");
//var time = moment().add(12, 'hours');
$("#currentTime").text(momentTime);



$(document).ready(function(){
  $("#saveBtn1").click(function(){
    console.log("ready")
    let task = $("#1").val();
    console.log(task);
    localStorage.setItem("task#1", JSON.stringify(task));
    //localStorage.getItem( "task#1", JSON.stringify(task)) = userTaskEl.text();
    //userTaskEl.task = localStorage.getItem(task);
    //console.log(userTaskEl.text())
  })

  $("#saveBtn2").click(function(){
    console.log("ready")
    let task = $("#2").val();
    console.log(task);
    localStorage.setItem("task#2", JSON.stringify(task));
    //localStorage.getItem( "task#1", JSON.stringify(task)) = userTaskEl.text();
    //userTaskEl.task = localStorage.getItem(task);
    //console.log(userTaskEl.text())
  })

  
  //localStorage.getItem(task) = userTaskEl.val();
})

$(document).ready(function(){
  let task = $("#1").val();
  console.log(task)
  inputField = localStorage.getItem("task#1")
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

  if (hourId <= currentTime && currentTime < hourId+100) {
    $(this).children(".userTask").removeClass("future past").addClass("present");

  } else if (hourId < currentTime) {
    $(this).children(".userTask").removeClass("future present").addClass("past");
  } else {
    $(this).children(".userTask").removeClass("present past").addClass("future");
  }

})



