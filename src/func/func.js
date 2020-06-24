function func() {
  this.rotate = (rotate) => {
    cvs.translate(200 / 2, 200 / 2);
    cvs.rotate(rad * rotate);
    cvs.translate(-200 / 2, -200 / 2);
  };

  this.hourHands = (c, a, b, h_rad) => {
    let hands = ((a + b / 100) * h_rad - 90) * rad;
    cvs.moveTo(c.x, c.y);
    cvs.lineTo(
      wid / 2 + c.r * Math.cos(hands),
      wid / 2 + c.r * Math.sin(hands)
    );
  };

  this.shadow = (a, b, c, shadow_c) => {
    time_canvas.shadowOffsetX = a;
    time_canvas.shadowOffsetY = b;
    time_canvas.shadowBlur = c;
    time_canvas.shadowColor = shadow_c;
  };

  this.determineTheSize = (canvas) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = String(canvas.width / devicePixelRatio) + "px";
    canvas.style.height = String(canvas.height / devicePixelRatio) + "px";
  };
}
