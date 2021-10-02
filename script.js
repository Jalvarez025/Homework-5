//var userTaskEl = document.getElementById("userTask");
// var timeSlotEl = document.getElementById("timeSlot");
// var saveBtnEl = document.querySelector("#saveBtn");


 var userTaskEl = $('#userTask');
// var timeSlotEl = $('timeSlot');
// var saveBtnEl = $('saveBtn');


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
  var hourId = $("#timeSlot").attr("id");
  console.log(hourId);

  

})

