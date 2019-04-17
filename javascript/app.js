let test = document.querySelector('.schedule');

window.onscroll = function() {scrollDown()};

const scrollDown = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementsByClassName('info-text')[0].style.display = 'block';
  }
}

let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let d = new Date();
let currentMonth = month[d.getMonth()];
let currentYear = new Date().getFullYear();

document.getElementsByClassName('calendar')[0].href = "PDFs/"+currentMonth+"-"+currentYear+"-Calendar.pdf";
document.getElementsByClassName('notes')[0].href = "PDFs/Center-Notes-"+currentMonth+"-"+currentYear+".pdf";

