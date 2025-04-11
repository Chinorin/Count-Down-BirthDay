const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById('countdown');


const currentYear = new Date().getFullYear();
const birthdayTime = new Date(`December 04 ${currentYear} 00:00:00`);

const birthdayText = document.getElementById("birthday-text");
const formattedDate = birthdayTime.toLocaleDateString({
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

birthdayText.innerText = `🎂 วันเกิดคือวันที่ ${formattedDate}`;

function updateCountDown(){
    const currentTime = new Date();
    const diff = birthdayTime-currentTime;
    /*
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s =Math.floor(diff/1000)%60;
   days.innerHTML=d;
    hours.innerHTML=h<10?'0' +h:h;
    minutes.innerHTML=m < 10?'0'+m:m;
    seconds.innerHTML = s<10?'0'+s:s;
    */

    let year,
      month,
      day,
      hour,
      minute,
      second;

  second = Math.floor(diff / 1000);
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  year = Math.floor(month / 12);
  month = month % 12;

  days.innerHTML=day;
  hours.innerHTML=hour<10?'0' +hour:hour;
  minutes.innerHTML=minute < 10?'0'+minute:minute;
  seconds.innerHTML = second<10?'0'+second:second;

}

setInterval(updateCountDown,1000);