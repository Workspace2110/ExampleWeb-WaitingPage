function getNeedTime() {
    //Star Date
    var today = new Date();
    //End Date
    var goalDate = new Date("2019/2/2 00:00");
    //Span Time
    var spantime = (goalDate - today) / 1000;

    var d = Math.floor(spantime / (24 * 3600));
    var h = Math.floor(spantime % (24 * 3600) / 3600);
    var m = Math.floor(spantime % 3600 / 60);
    var s = Math.floor(spantime % 60);

    if (spantime > 0) {
        document.getElementById("needTime").innerHTML =
            checkTime(d) + " 天 " +
            checkTime(h) + " 小時 " +
            checkTime(m) + " 分 " +
            checkTime(s) + " 秒";
        var t = setTimeout(getNeedTime, 500);
    } else {
        document.getElementById("waitText").innerHTML =
            "<div class='display-4 animate-top-down'>Welcome</div>" +
            '<hr class="border-whitesmoke" style="margin:auto; width:90%;">' +
            "<form method='' action='http://google.com'>" +
            "<input class='btn btn-secondary btn-lg btn-block' type= 'submit' value = 'Go to Google'>" +
            "</form>" +
            "</div>";
    }


}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}