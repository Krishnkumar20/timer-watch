function f(){
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor = "rgb(203 31 31)";
    document.getElementById("start").style.color = "snow";
}
function l()
{
    document.getElementById("start").style.backgroundColor = "";
    document.getElementById("start").style.color = "";
    document.getElementById("start").disabled = true;
}
document.getElementById("start").addEventListener("click", timer);
document.getElementById("stop").addEventListener("click", s);
document.getElementById("reset").addEventListener("click", r);
function s() {
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.backgroundColor = "rgb(203 31 31)";
    document.getElementById("reset").style.color = "snow";
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor = "rgb(203 31 31)";
    document.getElementById("start").style.color = "snow";
    clearInterval(interval);
}
function r() {
    location.reload();
}
var ms = 0;
var d = 1;
var d1 = 1;
var d2 = 1;
function timer() {
    document.getElementById("stop").disabled = false;
    document.getElementById("stop").style.backgroundColor = "rgb(203 31 31)";
    document.getElementById("stop").style.color = "snow";
    document.getElementById("start").innerHTML = "Resume";
    interval = setInterval(() => {
        if (ms < 10) {
            document.getElementById('t3').innerHTML = "0" + ms;
            ms = ms + 1;
        }
        else if (ms > 9 && ms < 100) {
            document.getElementById('t3').innerHTML = ms;
            ms = ms + 1;
        }
        else {
            ms = 0;
            if (d < 10) {
                document.getElementById('t2').innerHTML = "0" + d;
                d = d + 1;
            }
            else if (d > 9 && d < 60) {
                document.getElementById('t2').innerHTML = d;
                d = d + 1;
            }
            else {
                d = 0;
                if (d1 < 10) {
                    document.getElementById('t1').innerHTML = "0" + d1;
                    d1 = d1 + 1;
                }
                else if (d1 > 9 && d1 < 60) {
                    document.getElementById('t1').innerHTML = d1;
                    d1 = d1 + 1;
                }
                else {
                    d1 = 0;
                    if (d2 < 10) {
                        document.getElementById('t').innerHTML = "0" + d2;
                        d2 = d2 + 1;
                    }
                    else {
                        document.getElementById('t').innerHTML = d2;
                        d2 = d2 + 1;
                    }
                }
            }
        }

    }, 10);
}