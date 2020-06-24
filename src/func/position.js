function position() {
  this.day = () => {
    let today = new Date();
    let date = today.getFullYear();
    date += "." + today.getMonth() + 1;
    date += "." + today.getDate();
    return date;
  };

  this.now = () => {
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
  };

  this.dot = (array) => {
    var circles = [],
      center = [],
      dotted = [],
      clock_time = [];
    circles.push({
      x: wid / 2,
      y: wid / 2,
      radius: wid / 2 - 2,
      line: 10,
      color: "#0000",
      fill: "#2A2A2A",
    });
    circles.push({
      x: wid / 2,
      y: wid / 2,
      radius: wid / 2 - 14,
      line: 3,
      color: "#FEDFE1",
      fill: "#0000",
    });
    center.push({
      x: wid / 2,
      y: wid / 2,
      radius: 3.5,
      line: 10,
      color: "#FFF",
      fill: "#FFF",
    });
    dotted.push({
      r: wid / 2 - 35,
      fill: "#FEDFE1",
      round_size: 8,
    });
    clock_time.push({
      r: wid / 2 - 90,
      color: "#FFF",
      fill: "#FFF",
      round_size: 3,
      x: wid / 2,
      y: wid / 2,
      line: 8,
      func: "hour",
    });
    clock_time.push({
      r: wid / 2 - 60,
      color: "#FFF",
      fill: "#FFF",
      round_size: 3,
      x: wid / 2,
      y: wid / 2,
      line: 6,
      func: "min",
    });
    clock_time.push({
      r: wid / 2 - 40,
      color: "#FFF",
      fill: "#FFF",
      round_size: 3,
      x: wid / 2,
      y: wid / 2,
      line: 3,
      func: "mil",
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
}
