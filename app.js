const end = new Date("February 28, 2022 00:00:00");

const deadline = 
{   
   day: "28",
   hour: "24",
   minutes: "60",
   seconds: "60"
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];

const today = new Date();
let today_day = today.getDate()
let today_hour = today.getHours();
let today_minutes = today.getMinutes();
let today_seconds = today.getSeconds();

console.log(today_day);
console.log(today_hour);
console.log(today_minutes);
console.log(today_seconds);

let final_day = (deadline.day - today_day);

let final_hour = (deadline.hour - today_hour);
if(final_hour < 0)
{
    final_hour = Math.abs(final_hour);
}

let final_minutes = (deadline.minutes - today_minutes);
if(final_minutes < 0 )
{
    final_minutes = Math.abs(final_minutes)
}

let final_seconds = (deadline.seconds - today_seconds);
if(final_seconds < 0)
{
    final_seconds = Math.abs(final_seconds);
}

document.getElementById("days").innerHTML = final_day;
document.getElementById("hours").innerHTML = final_hour;
document.getElementById("minutes").innerHTML = final_minutes;
document.getElementById("seconds").innerHTML = final_seconds;

seconds = document.getElementById("seconds").innerHTML;
minutes = document.getElementById("minutes").innerHTML;
hours = document.getElementById("hours").innerHTML;
days = document.getElementById("days").innerHTML;

setInterval(function() 
{
    document.getElementById("seconds").innerHTML -= 1;
    if(document.getElementById("seconds").innerHTML < 0)
    {
        document.getElementById("seconds").innerHTML = 59;
    }

    if(document.getElementById("minutes").innerHTML < 1)
    {
        document.getElementById("minutes").innerHTML = 59;
    }

    if (document.getElementById("seconds").innerHTML == 0)
    {
        document.getElementById("minutes").innerHTML -= 1;
    }
    else if(document.getElementById("minutes").innerHTML == 0)
    {
        hours -= 1;
    }
    else if(document.getElementById("hours").innerHTML == 0)
    {
        document.getElementById("days").innerHTML -= 1;
    }
    
}, 1000);

