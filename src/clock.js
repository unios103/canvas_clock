var canvas,
  cvs,
  p,
  f,
  wid = 200;
var rad = Math.PI / 180;

window.requestAnimFrame = (function() {
  return function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

function loop() {
  requestAnimFrame(loop);
  canvas = document.getElementById("clock");
  cvs = canvas.getContext("2d");
  f = new func();
  p = new position();
  draw();
}

function draw() {
  if (!canvas || !canvas.getContext) {
    return false;
  }
  cvs.clearRect(0, 0, wid, wid);
  Circle(p.dot("circle"), round);
  Circle(p.dot("dotted"), dottedLine);
  Message("clock");
  Message("@unios103");
  Circle(p.dot("now_time"), clockHands);
  Circle(p.dot("center"), round);
}

function Circle(circles, func) {
  for (const c of circles) {
    cvs.beginPath();
    func(c);
    cvs.lineWidth = c.line;
    cvs.strokeStyle = c.color;
    cvs.fillStyle = c.fill;
    cvs.fill();
    cvs.stroke();
  }
}

var round = function(c) {
  cvs.arc(c.x, c.y, c.radius, rad * 0, rad * 360, true);
};

var dottedLine = function(c) {
  for (let r = 0; r < 360; r += 30) {
    cvs.beginPath();
    cvs.fillStyle = c.fill;
    if (r % 90 == 0) {
      cvs.arc(
        wid / 2 + c.r * Math.cos(r * rad),
        wid / 2 + c.r * Math.sin(r * rad),
        c.round_size + 2,
        rad * 0,
        rad * 360,
        true
      );
      cvs.fillStyle = "#DB4D6D";
    }
    cvs.arc(
      wid / 2 + c.r * Math.cos(r * rad),
      wid / 2 + c.r * Math.sin(r * rad),
      c.round_size,
      rad * 0,
      rad * 360,
      true
    );
    cvs.fill();
  }
};

function clockHands(c) {
  let days = new Date();
  let hour = days.getHours();
  let min = days.getMinutes();
  let sec = days.getSeconds();
  let mil = days.getMilliseconds();
  if (c.func === "hour") {
    f.hourHands(c, hour, (min / 6) * 10, 30);
  }
  if (c.func == "min") {
    f.hourHands(c, min, (sec / 6) * 10, 6);
  }
  if (c.func == "mil") {
    f.hourHands(c, sec, mil / 10, 6);
  }
}

function Message(message) {
  cvs.beginPath();
  cvs.font = "20px Great Vibes";
  cvs.fillStyle = "#FEDFE1";
  if (message == "@unios103") {
    f.rotate(-25);
    cvs.fillText(message, 55, 60);
    f.rotate(25);
    cvs.stroke();
  } else if (message == "clock") {
    cvs.font = "18px Great Vibes";
    f.rotate(20);
    cvs.fillText(message, 115, 90);
    f.rotate(-20);
    cvs.stroke();
  }
}

requestAnimFrame(loop);
