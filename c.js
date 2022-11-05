function time()
{
   var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = date.getDay();
    var sesion = "AM";
    if(h==0){
        h=12;
    }
    if(h>12)
    {
       hh=h-12;
       sesion="PM"
    }
    h = (h<10) ? "0" +h:h;
    m = (m<10) ? "0" +m:m;
    s = (s<10) ? "0" +s:s;
    d = (d<10) ? "0" +d:d;
    var t=h+":"+m+":"+s+":"+sesion;
    document.getElementById("time").innerText=t;
    document.getElementById("time").textContent=t;
    var day;
    if(d==01){
        day="MONDAY";   
    }
    else if(d==02)
    {
        day="TUESDAY";   

    }
    else if(d==03)
    {
        day="WEDNESDAY";   

    }
    else if(d==04)
    {
        day="THURSDAY";   

    }
    else if(d==05)
    {
        day="FRIDAY";   

    }
    else if(d==06)
    {
        day="SATURDAY";   

    }
    else
    {
        day="SUNDAY";   

    }
    document.getElementById("day").innerText=day;
    setTimeout(showTime, 1000);  
}
  function on()
  {
    document.getElementById('img').src='on.jpg';
    document.getElementById('time').style.color="black";
    document.getElementById('day').style.color="black";
    document.getElementById('bd').style.backgroundColor="white";
  }
  function off()
  {
    document.getElementById('img').src='ci.jpg';
    document.getElementById('time').style.color="white";
    document.getElementById('day').style.color="white";
    document.getElementById('bd').style.backgroundColor="black";
  }