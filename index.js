let dateBD = document.getElementById("input-date");
let Dob = document.getElementById("Dob");
let res = document.getElementById("res");

let yearBD = document.getElementById("year");
let monthBD = document.getElementById("month");
let dayBD = document.getElementById("day");
let hourBD = document.getElementById("hour");
let secondBD = document.getElementById("second");
let msBD = document.getElementById("ms");

dateBD.addEventListener('change',function(){
    // to get to date from input:
    // 1- let date = new Date(this.value);
    // 2- date.toLocaleDateString('Local',{weekday: 'long'});

    let date = new Date(this.value);
    let DOB = date.toLocaleDateString('eg',{day: 'numeric', month : 'long',year : 'numeric'}); 
    Dob.innerHTML = "DOB: " + DOB;

    
    if (Dob.innerHTML !== ""){
        res.style.display = "grid";
    }
    // age in mili second
    let ms_DOB = Date.parse(DOB);// parse returns the time difference in milliseconds
    let ms_Now = Date.now();
    let miliSecond = ms_Now - ms_DOB
    msBD.innerHTML = miliSecond;
    
    // get to number of years in mili second
    let second = 1000;
    let minte = second * 60;
    let hour = minte * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = month * 12;
    

    let years = Math.round(miliSecond / year);
    yearBD.innerHTML = years;

    let months = Math.round(miliSecond / month);
    monthBD.innerHTML = months;

    let days = Math.round(miliSecond / day);
    dayBD.innerHTML = days;

    let hours = Math.round(miliSecond / hour);
    hourBD.innerHTML = hours;

    let seconds = Math.round(miliSecond / second);
    secondBD.innerHTML = seconds;
});


