var canvas,
  cvs,
  wid = 200;
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

function loop() {
  requestAnimFrame(loop);
  canvas = document.getElementById("clock");
  cvs = canvas.getContext("2d");
  draw();
}

function draw() {
  if (!canvas || !canvas.getContext) {
    return false;
  }
  cvs.clearRect(0, 0, wid, wid);
  Circle(dot("circle"), round);
  Circle(dot("dotted"), dottedLine);
  Message("clock");
  Message("@unios103");
  Circle(dot("now_time"), clockHands);
  Circle(dot("center"), round);
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
    hourHands(c, hour, (min / 6) * 10, 30);
  }
  if (c.func == "min") {
    hourHands(c, min, (sec / 6) * 10, 6);
  }
  if (c.func == "mil") {
    hourHands(c, sec, mil / 10, 6);
  }
}

function hourHands(c, a, b, h_rad) {
  let hands = ((a + b / 100) * h_rad - 90) * rad;
  cvs.moveTo(c.x, c.y);
  cvs.lineTo(wid / 2 + c.r * Math.cos(hands), wid / 2 + c.r * Math.sin(hands));
}

function Message(message) {
  cvs.beginPath();
  cvs.font = "20px Great Vibes";
  cvs.fillStyle = "#FEDFE1";
  if (message == "@unios103") {
    message_rotate(-25);
    cvs.fillText(message, 55, 60);
    message_rotate(25);
    cvs.stroke();
  } else if (message == "clock") {
    cvs.font = "18px Great Vibes";
    message_rotate(20);
    cvs.fillText(message, 115, 90);
    message_rotate(-20);
    cvs.stroke();
  }
}

function message_rotate(rotate) {
  cvs.translate(200 / 2, 200 / 2);
  cvs.rotate(rad * rotate);
  cvs.translate(-200 / 2, -200 / 2);
}

var dot = function(array) {
  var circles = [],
    center = [],
    dotted = [],
    clock_time = [];
  circles.push({
    x: wid / 2,
    y: wid / 2,
    radius: wid / 2 - 2,
    line: 5,
    color: "#0000",
    fill: "#2A2A2A"
  });
  circles.push({
    x: wid / 2,
    y: wid / 2,
    radius: wid / 2 - 7,
    line: 1.5,
    color: "#FEDFE1",
    fill: "#0000"
  });
  center.push({
    x: wid / 2,
    y: wid / 2,
    radius: 3.5,
    line: 1.5,
    color: "#FFF",
    fill: "#FFF"
  });
  dotted.push({
    r: wid / 2 - 17.5,
    fill: "#FEDFE1",
    round_size: 4
  });
  clock_time.push({
    r: wid / 2 - 45,
    color: "#FFF",
    fill: "#FFF",
    round_size: 3,
    x: wid / 2,
    y: wid / 2,
    line: 4,
    func: "hour"
  });
  clock_time.push({
    r: wid / 2 - 30,
    color: "#FFF",
    fill: "#FFF",
    round_size: 3,
    x: wid / 2,
    y: wid / 2,
    line: 3,
    func: "min"
  });
  clock_time.push({
    r: wid / 2 - 20,
    color: "#FFF",
    fill: "#FFF",
    round_size: 3,
    x: wid / 2,
    y: wid / 2,
    line: 1.5,
    func: "mil"
  });
  if (array === "circle") {
    return circles;
  } else if (array === "center") {
    return center;
  } else if (array === "dotted") {
    return dotted;
  } else if (array === "now_time") {
    return clock_time;
  } else {
    console.log("Not container!");
    return false;
  }
};

requestAnimFrame(loop);
