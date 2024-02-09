// 12 hour = 360degree
// 1 hour = 360/12 = 30degree
//    60 min =30
//    1 min=30/60 =1/2
//    m mins =(1/2)m
// h hours =30h+m/2    /* hours */

// 60min = 360degree
// 1min =360/60 =6degree
// m min = 6m                 /* mintes */

// 60sec = 360degree
// 1sec =360/60 =6degree
// s secs = 6s                  /* seconds */


let hr = document.getElementById ('hour');
let min = document.getElementById ('min');
let sec = document.getElementById ('sec');

function displayTime(){
   let date = new Date();
   
   // getting hours , min , secs from date 
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   let hRotation =30*hh + mm/2;
   let mRotation =6*mm;
   let sRotation =6*ss;

   hr.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval (displayTime,1000)