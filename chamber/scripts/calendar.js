var calendarDiv = document.getElementById('calendar');
var date = new Date();

var month = date.getMonth(); 
var year = date.getFullYear();
var day = date.getDate();

var firstDay = new Date(year, month, 1).getDay();

var daysInMonth = new Date(year, month + 1, 0).getDate();
var calendar = [];

for (let i = 1; i <= daysInMonth; i++) {
  calendar.push(i);
}

for (let i = 0; i < firstDay; i++) {
  calendar.unshift(' ');
}
while (calendar.length % 7 !== 0) {
  calendar.push(' ');
}

var calendarString = '';
for (let i = 0; i < calendar.length; i++) {
  if (calendar[i] === day) {
    calendarString += '🔵' + calendar[i] + ' '; /*in futuro i will change it to circle the number, no to stay aside like now.*/
  } else {
    calendarString += calendar[i] + ' ';
  }
  
  if ((i + 1) % 7 === 0) {
    calendarString += '\n';
  }
}

calendarDiv.innerHTML = "<h2>Calendar</h2><pre>" + calendarString + "</pre>";
