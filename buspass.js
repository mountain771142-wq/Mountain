let valid_date = document.getElementById("date");
let time = document.getElementById("time");
let timer = document.getElementById("timer");
let id_date = document.getElementById("id_date");
let date = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let today_day = date.getDate();
let today_month = months[date.getMonth()];
let today_year = date.getFullYear();

// عرض التاريخ الحالي
valid_date.innerHTML = today_day + " " + today_month + " " + today_year;

// عرض الوقت الحالي
let newDate = new Date();
let gethours = newDate.getHours();
let getminutes = newDate.getMinutes();
let t;
if(gethours < 10 & getminutes >= 10){
    t = "0"+ gethours + ":" + getminutes;
} else if(getminutes < 10 & gethours >= 10){
    t = gethours + ":" + "0"+ getminutes;
} else if (getminutes<10 & gethours<10){
    t = "0"+gethours + ":" + "0"+ getminutes;
} else {
    t = gethours + ":" + getminutes;
}
time.innerHTML = t;

// 🔥 تغيير المدة إلى يوم واحد (24 ساعة)
let countDownDate = new Date(date.getTime() + 24 * 60 * 60 * 1000).getTime();

// توليد الرقم التسلسلي
const id_year = date.getFullYear() * 1e4;
const id_month = (date.getMonth() + 1) * 100;
const id_day = date.getDate();
const result = id_year + id_month + id_day + '';
id_date.innerHTML = result;

// 🔥 تحديث العداد التنازلي (يوم واحد)
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(days > 0){
        timer.innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
    } else {
        timer.innerHTML = hours + "h : " + minutes + "m : " + seconds + "s ";
    }

    if (distance < 0) {
        clearInterval(x);
        timer.innerHTML = "EXPIRED";
    }
}, 1000);