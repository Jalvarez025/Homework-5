//var userTaskEl = document.getElementById("userTask");
// var timeSlotEl = document.getElementById("timeSlot");
// var saveBtnEl = document.querySelector("#saveBtn");


 var userTaskEl = $('#userTask');
// var timeSlotEl = $('timeSlot');
// var saveBtnEl = $('saveBtn');
var inputField1 = $('#1')
var inputField2 = $('#2')
var inputField3 = $('#3')
var inputField4 = $('#4')
var inputField5 = $('#5')
var inputField6 = $('#6')
var inputField7 = $('#7')
var inputField8 = $('#8')
var inputField9 = $('#9')
var inputField10 = $('#10')
var inputField11 = $('#11')
var inputField12 = $('#12')
var inputField13 = $('#13')
var inputField14 = $('#14')
var inputField15 = $('#15')
var inputField16 = $('#16')
var inputField17 = $('#17')
var inputField18 = $('#18')
var inputField19 = $('#19')
var inputField20 = $('#20')
var inputField21 = $('#21')
var inputField22 = $('#22')
var inputField23 = $('#23')
var inputField24 = $('#24')

var momentTime = moment().format("HHmm");
//var time = moment().add(12, 'hours');
$("#currentTime").text(momentTime);

var momentDate = moment().format("MMM Do YYYY");
$("#currentDate").text(momentDate);

$(document).ready(function(){
  let task1 = JSON.parse(localStorage.getItem("task#1"))
  console.log(task1)
  inputField1.val(task1)

  $("#saveBtn1").click(function(){
    console.log("ready")
    let task1 = $("#1").val();
    console.log(task1);
    localStorage.setItem("task#1", JSON.stringify(task1));
  })
})

$(document).ready(function(){
  let task2 = JSON.parse(localStorage.getItem("task#2"))
  console.log(task2)
  inputField2.val(task2)

  $("#saveBtn2").click(function(){
    console.log("ready")
    let task2 = $("#2").val();
    console.log(task2);
    localStorage.setItem("task#2", JSON.stringify(task2));
  })
})

$(document).ready(function(){
  let task3 = JSON.parse(localStorage.getItem("task#3"))
  console.log(task3)
  inputField3.val(task3)

  $("#saveBtn3").click(function(){
    console.log("ready")
    let task3 = $("#3").val();
    console.log(task3);
    localStorage.setItem("task#3", JSON.stringify(task3));
  })
})

$(document).ready(function(){
  let task4 = JSON.parse(localStorage.getItem("task#4"))
  console.log(task4)
  inputField4.val(task4)

  $("#saveBtn4").click(function(){
    console.log("ready")
    let task4 = $("#4").val();
    console.log(task4);
    localStorage.setItem("task#4", JSON.stringify(task4));
  })
})

$(document).ready(function(){
  let task5 = JSON.parse(localStorage.getItem("task#5"))
  console.log(task5)
  inputField5.val(task5)

  $("#saveBtn5").click(function(){
    console.log("ready")
    let task5 = $("#5").val();
    console.log(task5);
    localStorage.setItem("task#5", JSON.stringify(task5));
  })
})

$(document).ready(function(){
  let task6 = JSON.parse(localStorage.getItem("task#6"))
  console.log(task6)
  inputField6.val(task6)

  $("#saveBtn6").click(function(){
    console.log("ready")
    let task6 = $("#6").val();
    console.log(task6);
    localStorage.setItem("task#6", JSON.stringify(task6));
  })
})

$(document).ready(function(){
  let task7 = JSON.parse(localStorage.getItem("task#7"))
  console.log(task7)
  inputField7.val(task7)

  $("#saveBtn7").click(function(){
    console.log("ready")
    let task7 = $("#7").val();
    console.log(task7);
    localStorage.setItem("task#7", JSON.stringify(task7));
  })
})

$(document).ready(function(){
  let task8 = JSON.parse(localStorage.getItem("task#8"))
  console.log(task8)
  inputField8.val(task8)

  $("#saveBtn8").click(function(){
    console.log("ready")
    let task8 = $("#8").val();
    console.log(task8);
    localStorage.setItem("task#8", JSON.stringify(task8));
  })
})

$(document).ready(function(){
  let task9 = JSON.parse(localStorage.getItem("task#9"))
  console.log(task9)
  inputField9.val(task9)

  $("#saveBtn9").click(function(){
    console.log("ready")
    let task9 = $("#9").val();
    console.log(task9);
    localStorage.setItem("task#9", JSON.stringify(task9));
  })
})

$(document).ready(function(){
  let task10 = JSON.parse(localStorage.getItem("task#10"))
  console.log(task10)
  inputField10.val(task10)

  $("#saveBtn10").click(function(){
    console.log("ready")
    let task10 = $("#10").val();
    console.log(task10);
    localStorage.setItem("task#10", JSON.stringify(task10));
  })
})

$(document).ready(function(){
  let task11 = JSON.parse(localStorage.getItem("task#11"))
  console.log(task11)
  inputField11.val(task11)

  $("#saveBtn11").click(function(){
    console.log("ready")
    let task11 = $("#11").val();
    console.log(task11);
    localStorage.setItem("task#11", JSON.stringify(task11));
  })
})

$(document).ready(function(){
  let task12 = JSON.parse(localStorage.getItem("task#12"))
  console.log(task12)
  inputField12.val(task12)

  $("#saveBtn12").click(function(){
    console.log("ready")
    let task12 = $("#12").val();
    console.log(task12);
    localStorage.setItem("task#12", JSON.stringify(task12));
  })
})

$(document).ready(function(){
  let task13 = JSON.parse(localStorage.getItem("task#13"))
  console.log(task13)
  inputField13.val(task13)

  $("#saveBtn13").click(function(){
    console.log("ready")
    let task13 = $("#13").val();
    console.log(task13);
    localStorage.setItem("task#13", JSON.stringify(task13));
  })
})

$(document).ready(function(){
  let task14 = JSON.parse(localStorage.getItem("task#14"))
  console.log(task14)
  inputField14.val(task14)

  $("#saveBtn14").click(function(){
    console.log("ready")
    let task14 = $("#14").val();
    console.log(task14);
    localStorage.setItem("task#14", JSON.stringify(task14));
  })
})

$(document).ready(function(){
  let task15 = JSON.parse(localStorage.getItem("task#15"))
  console.log(task15)
  inputField15.val(task15)

  $("#saveBtn15").click(function(){
    console.log("ready")
    let task15 = $("#15").val();
    console.log(task15);
    localStorage.setItem("task#15", JSON.stringify(task15));
  })
})

$(document).ready(function(){
  let task16 = JSON.parse(localStorage.getItem("task#16"))
  console.log(task16)
  inputField16.val(task16)

  $("#saveBtn16").click(function(){
    console.log("ready")
    let task16 = $("#16").val();
    console.log(task16);
    localStorage.setItem("task#16", JSON.stringify(task16));
  })
})

$(document).ready(function(){
  let task17 = JSON.parse(localStorage.getItem("task#17"))
  console.log(task17)
  inputField17.val(task17)

  $("#saveBtn17").click(function(){
    console.log("ready")
    let task17 = $("#17").val();
    console.log(task17);
    localStorage.setItem("task#17", JSON.stringify(task17));
  })
})

$(document).ready(function(){
  let task18 = JSON.parse(localStorage.getItem("task#18"))
  console.log(task18)
  inputField18.val(task18)

  $("#saveBtn18").click(function(){
    console.log("ready")
    let task18 = $("#18").val();
    console.log(task18);
    localStorage.setItem("task#18", JSON.stringify(task18));
  })
})

$(document).ready(function(){
  let task19 = JSON.parse(localStorage.getItem("task#19"))
  console.log(task19)
  inputField19.val(task19)

  $("#saveBtn19").click(function(){
    console.log("ready")
    let task19 = $("#19").val();
    console.log(task19);
    localStorage.setItem("task#19", JSON.stringify(task19));
  })
})

$(document).ready(function(){
  let task20 = JSON.parse(localStorage.getItem("task#20"))
  console.log(task20)
  inputField20.val(task20)

  $("#saveBtn20").click(function(){
    console.log("ready")
    let task20 = $("#20").val();
    console.log(task20);
    localStorage.setItem("task#20", JSON.stringify(task20));
  })
})

$(document).ready(function(){
  let task21 = JSON.parse(localStorage.getItem("task#21"))
  console.log(task21)
  inputField21.val(task21)

  $("#saveBtn21").click(function(){
    console.log("ready")
    let task21 = $("#21").val();
    console.log(task21);
    localStorage.setItem("task#21", JSON.stringify(task21));
  })
})

$(document).ready(function(){
  let task22 = JSON.parse(localStorage.getItem("task#22"))
  console.log(task22)
  inputField22.val(task22)

  $("#saveBtn22").click(function(){
    console.log("ready")
    let task22 = $("#22").val();
    console.log(task22);
    localStorage.setItem("task#22", JSON.stringify(task22));
  })
})

$(document).ready(function(){
  let task23 = JSON.parse(localStorage.getItem("task#23"))
  console.log(task23)
  inputField23.val(task23)

  $("#saveBtn23").click(function(){
    console.log("ready")
    let task23 = $("#23").val();
    console.log(task23);
    localStorage.setItem("task#23", JSON.stringify(task23));
  })
})

$(document).ready(function(){
  let task24 = JSON.parse(localStorage.getItem("task#24"))
  console.log(task24)
  inputField24.val(task24)

  $("#saveBtn24").click(function(){
    console.log("ready")
    let task24 = $("#24").val();
    console.log(task24);
    localStorage.setItem("task#24", JSON.stringify(task24));
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

  if (hourId <= currentTime && currentTime < hourId+100) {
    $(this).children(".userTask").removeClass("future past").addClass("present");

  } else if (hourId < currentTime) {
    $(this).children(".userTask").removeClass("future present").addClass("past");
  } else {
    $(this).children(".userTask").removeClass("present past").addClass("future");
  }

})



