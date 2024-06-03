// function validate() {
//   // Get the value of the input field with id="numb"
//   let x = document.getElementsByClassName("wide").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementsByClassName("demo").innerHTML = text;
// }

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
let doom = document.getElementsByClassName('item');
let confr = (doom.length - 4)*(-350);
let confl = 0;
//left
document.getElementById("l").addEventListener("click", function(){
  x += 350;
  if (x > confl){x = confr - 350}else{
  document.getElementById("move").style.marginLeft = x + "px";}
});
//right
document.getElementById("r").addEventListener("click", function(){
	x += -350;
	p += -10;
if (x < confr){x = 350}else{
  document.getElementById("move").style.marginLeft = x + "px";}
});