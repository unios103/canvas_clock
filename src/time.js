var time,
  time_canvas,
  wids = 120,
  p,
  f,
  flag = false;
var rad = Math.PI / 180;

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function loop_time() {
  requestAnimFrame(loop_time);
  f = new func();
  p = new position();
  time = document.getElementById("time");
  f.determineTheSize(time);
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
  f.shadow(2, 2, 2, "#B1969399");
  time_canvas.fillText(p.day(), wids - 101, 135);
  time_canvas.fill();
  time_canvas.beginPath();
  time_canvas.font = "29px  Cabin Sketch";
  time_canvas.fillText(p.now(), wids - 16.5, 135);
}

function clearTime() {
  f.shadow(0, 0, 0, "#0000");
  time_canvas.clearRect(0, 0, 200, 200);
}

requestAnimFrame(loop_time);
