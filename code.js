// call showtime to render at every second
setInterval(showTime, 1000);


// Define the showtime funct
function showTime(){
    //get current date and time
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // set 12 hour format
    if (hour >= 12){
        if(hour > 12){
            hour -= 12 ;
            am_pm = "PM";
        }

    }else if (hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    // show time on wepage
    document.getElementById("clock").innerHTML = currentTime;

}

// dumb shorthand time sample code
function theDate(){
    //get the date object
    let date = new Date();
    let theDay = date.toUTCString().slice(0,16);
    document.getElementById("day").innerHTML = theDay;

}



showTime();
theDate();