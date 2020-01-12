var time,
  time_canvas,
  wids = 120;
var rad = Math.PI / 180;

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function loop_time() {
  requestAnimFrame(loop_time);
  time = document.getElementById("time");
  time_canvas = time.getContext("2d");
  time.addEventListener("mouseover", drawTime, false);
  time.addEventListener("mouseout", clearTime, false);
}

function drawTime() {
  time_canvas.beginPath();
  time_canvas.font = "16px  Cabin Sketch";
  time_canvas.fillStyle = "#FEDFE1";
  shadow(2, 2, 2, "#B1969399");
  time_canvas.fillText(day(), wids - 99.5, 135);
  time_canvas.fill();
  time_canvas.beginPath();
  time_canvas.font = "29px  Cabin Sketch";
  time_canvas.fillText(now(), wids - 15.5, 135);
}

function clearTime() {
  shadow(0, 0, 0, "#0000");
  time_canvas.clearRect(0, 0, 200, 200);
}
function shadow(a, b, c, shadow_c) {
  time_canvas.shadowOffsetX = a;
  time_canvas.shadowOffsetY = b;
  time_canvas.shadowBlur = c;
  time_canvas.shadowColor = shadow_c;
}
function day() {
  var today = new Date();
  var date = today.getFullYear();
  date += "." + today.getMonth() + 1;
  date += "." + today.getDate();
  return date;
}

function now() {
  var today = new Date();
  var now = today.getHours();
  if (now / 10 < 1) {
    now = "0" + now;
  }
  var b = today.getMinutes();
  if (b / 10 < 1) {
    now += ":0" + b;
  } else {
    now += ":" + b;
  }
  return now;
}

requestAnimFrame(loop_time);
