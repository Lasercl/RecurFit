function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
    
  if(h == 0){
    h = 12;
  }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('profile-image');
    output.src = reader.result;
  };
reader.readAsDataURL(event.target.files[0]);
}

 function handleDayClick() {
      // Remove selected-day class from all calendar-day elements
      var selectedDays = document.getElementsByClassName("selected-day");
      for (var j = 0; j < selectedDays.length; j++) {
        selectedDays[j].classList.remove("selected-day");
      }

      // Add selected-day class to the clicked day element
      this.classList.add("selected-day");
    }

    // Get the reference to the calendar table and tbody
    var calendarTable = document.getElementById("calendar");
    var calendarBody = calendarTable.getElementsByTagName("tbody")[0];

    // Get the current date
    var currentDate = new Date();

    // Get the current month and year
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    // Function to update the calendar
    function updateCalendar() {
      // Clear the calendar body
      calendarBody.innerHTML = "";

      // Set the month and year heading
      var monthYearHeading = document.getElementById("month-year");
      monthYearHeading.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

      // Get the first day of the month
      var firstDay = new Date(currentYear, currentMonth, 1).getDay();

      // Get the number of days in the month
      var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Calculate the total number of cells needed in the calendar
      var totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

      // Fill in the calendar cells
      for (var i = 0; i < totalCells; i++) {
        var cell = document.createElement("td");

        // Calculate the date for each cell
        var date = i + 1 - firstDay;
        if (date > 0 && date <= daysInMonth) {
          cell.textContent = date;
          cell.addEventListener("click", handleDayClick);
        }

        // Add selected-day class to the current date
        if (currentDate.getDate() === date && currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear) {
          cell.classList.add("selected-day");
        }

        // Append the cell to the calendar body
        calendarBody.appendChild(cell);

        // Create a new row after every 7 cells
        if ((i + 1) % 7 === 0) {
          calendarBody.appendChild(document.createElement("tr"));
        }
      }
    }

    // Initial calendar rendering
    updateCalendar();

let x = 0;
let p = -10;
let i = 1;
let doom = document.getElementsByClassName('item2');
let confr = (doom.length - 5)*(-265);
let confl = 0;
//left
document.getElementById("l").addEventListener("click", function(){
  x += 250;
  if (x > confl){x = confr - 250}else{
  document.getElementById("move").style.marginLeft = x + "px";}
});
//right
document.getElementById("r").addEventListener("click", function(){
	x += -265;
	p += -10;
if (x < confr){x = 265}else{
  document.getElementById("move").style.marginLeft = x + "px";}
});


let x1 = 0;
let p1 = -10;
let i1 = 1;
let doom1 = document.getElementsByClassName('item3');
let confr1 = (doom1.length - 5)*(-265);
let confl1 = 0;
//left
document.getElementById("l1").addEventListener("click", function(){
  x1 += 250;
  if (x1 > confl1){x1 = confr1 - 250}else{
  document.getElementById("move1").style.marginLeft = x1 + "px";}
});
//right
document.getElementById("r1").addEventListener("click", function(){
	x1 += -265;
	p1 += -10;
if (x1 < confr1){x1 = 265}else{
  document.getElementById("move1").style.marginLeft = x1 + "px";}
});

let x2 = 0;
let p2 = -10;
let i2 = 1;
let doom2 = document.getElementsByClassName('item4');
let confr2 = (doom2.length - 5)*(-265);
let confl2 = 0;
//left
document.getElementById("l2").addEventListener("click", function(){
  x2 += 250;
  if (x2 > confl2){x2 = confr2 - 250}else{
  document.getElementById("move2").style.marginLeft = x2 + "px";}
});
//right
document.getElementById("r2").addEventListener("click", function(){
	x2 += -265;
	p2 += -10;
if (x2 < confr2){x2 = 265}else{
  document.getElementById("move2").style.marginLeft = x2 + "px";}
});