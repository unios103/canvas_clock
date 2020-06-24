var time,
  time_canvas,
  wids = 120 * devicePixelRatio,
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

const checkEvent = () => {
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
};

const monitoring = () => {
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
};

const drawTime = () => {
  time_canvas.clearRect(0, 0, wid, wid);
  time_canvas.beginPath();
  time_canvas.font = "32px  Cabin Sketch";
  time_canvas.fillStyle = "#FEDFE1";
  f.shadow(2, 2, 2, "#B1969399");
  time_canvas.fillText(p.day(), wids - 185, 270);
  time_canvas.fill();
  time_canvas.beginPath();
  time_canvas.font = "58px  Cabin Sketch";
  time_canvas.fillText(p.now(), wids - 20, 270);
};

function clearTime() {
  f.shadow(0, 0, 0, "#0000");
  time_canvas.clearRect(0, 0, wid, wid);
}

requestAnimFrame(loop_time);
