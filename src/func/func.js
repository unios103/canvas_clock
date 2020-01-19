function func() {
  this.rotate = function(rotate) {
    cvs.translate(200 / 2, 200 / 2);
    cvs.rotate(rad * rotate);
    cvs.translate(-200 / 2, -200 / 2);
  };
  this.hourHands = function(c, a, b, h_rad) {
    let hands = ((a + b / 100) * h_rad - 90) * rad;
    cvs.moveTo(c.x, c.y);
    cvs.lineTo(
      wid / 2 + c.r * Math.cos(hands),
      wid / 2 + c.r * Math.sin(hands)
    );
  };
  this.shadow = function(a, b, c, shadow_c) {
    time_canvas.shadowOffsetX = a;
    time_canvas.shadowOffsetY = b;
    time_canvas.shadowBlur = c;
    time_canvas.shadowColor = shadow_c;
  };
}
