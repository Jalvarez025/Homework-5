var userTaskEl = document.getElementById("userTask");
// var timeSlotEl = document.getElementById("timeSlot");
// var saveBtnEl = document.querySelector("#saveBtn");


// var userTaskEl = $('userTask');
// var timeSlotEl = $('timeSlot');
// var saveBtnEl = $('saveBtn');


$(document).ready(function(){
  $("#saveBtn").click(function(){
    $("#userTask").val(userTaskEl.textContent);
    console.log(userTaskEl.textContent);
  })
})

// var task = localStorage.getItem("task");

// saveBtnEl.addEventListener('click',function(){
//   //$('#userTask').val(userTaskEl.textContent);
//   console.log(userTaskEl,textContent);
//   userTaskEl.textContent = task;
//   localStorage.setItem("task", task);
// });