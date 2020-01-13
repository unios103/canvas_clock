var time,
  time_canvas,
  wids = 120,
  flag = false;
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
  checkEvent();
  monitoring();
}

function checkEvent() {
  time.addEventListener(
    "mouseover",
    function() {
      flag = true;
    },
    false
  );
  time.addEventListener(
    "mouseout",
    function() {
      flag = false;
    },
    false
  );
}

function monitoring() {
  let time_watching = new Date().getSeconds();
  if (flag) {
    drawTime();
  } else {
    clearTime();
  }
  if (time_watching == 0) {
    if (flag) {
      clearTime();
      drawTime();
    }
  }
}

function drawTime() {
  time_canvas.clearRect(0, 0, 200, 200);
  time_canvas.beginPath();
  time_canvas.font = "16px  Cabin Sketch";
  time_canvas.fillStyle = "#FEDFE1";
  shadow(2, 2, 2, "#B1969399");
  time_canvas.fillText(day(), wids - 99.5, 135);
  time_canvas.fill();
  time_canvas.beginPath();
  time_canvas.font = "29px  Cabin Sketch";
  time_canvas.fillText(now(), wids - 14, 135);
  let t = new Date().getFullYear();
}

function clearTime() {
  shadow(0, 0, 0, "#0000");
  time_canvas.clearRect(0, 0, 200, 200);
}

function day() {
  let today = new Date();
  let date = today.getFullYear();
  date += "." + today.getMonth() + 1;
  date += "." + today.getDate();
  return date;
}

function now() {
  let today = new Date();
  let now = today.getHours();
  if (now / 10 < 1) {
    now = "0" + now;
  }
  let b = today.getMinutes();
  if (b / 10 < 1) {
    now += ":0" + b;
  } else {
    now += ":" + b;
  }
  return now;
}

function shadow(a, b, c, shadow_c) {
  time_canvas.shadowOffsetX = a;
  time_canvas.shadowOffsetY = b;
  time_canvas.shadowBlur = c;
  time_canvas.shadowColor = shadow_c;
}

requestAnimFrame(loop_time);
