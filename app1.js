function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    //var ms = date.getMilliseconds(); // 0 - 1000
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
    // ms = (ms < 10) ? "0" + ms : ms;
    
    var time = h + ":" + m + ":" + s +   " " + session;
   	document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    // console.log(time);
    setTimeout(showTime, 10);
    
}

showTime();
