var dateEl = document.getElementById("date");
var timeEl = document.getElementById("time");
var badgeEl = document.getElementById("badge");

badgeEl.innerHTML = "X81400924";

function updateTime() {
    date = new Date();
    dateEl.innerHTML = date.getFullYear() + "-";
    dateEl.innerHTML += date.getDate() + "-";
    dateEl.innerHTML += (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);

    timeEl.innerHTML = "T" + 
                        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
                        + ":" +
                        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
                        + ":" +
                        (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
                        + "Z";
}

setInterval("updateTime()",1000);