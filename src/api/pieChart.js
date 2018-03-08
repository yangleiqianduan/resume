export default function PieChart(options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;

  this.draw = function () {
    let total_value = 0;
    let color_index = 0;
    let val, categ
    for (categ in this.options.data) {
      val = this.options.data[categ];
      total_value += val;
    }


    let start_angle = 0;
    for (categ in this.options.data) {
      val = this.options.data[categ];
      let slice_angle = 2 * Math.PI * val / total_value;
      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        Math.min(this.canvas.width / 2, this.canvas.height / 2),
        start_angle,
        start_angle + slice_angle,
        this.colors[color_index]
      )
      start_angle += slice_angle;
      color_index++;
    }

    if (this.options.doughnutHoleSize) {
      drawPieSlice(
        this.ctx,
        this.canvas.width / 2,
        this.canvas.height / 2,
        this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2),
        0,
        2 * Math.PI,
        "#fff"
      );
    }
    if (this.options.legend) {
      color_index = 0;
      var legendHTML = "";
      for (categ in this.options.data) {
        legendHTML += "<div><span style='display:inline-block;width:20px;background-color:" + this.colors[color_index++] + ";'>&nbsp;</span> " + categ + "</div>";
      }
      this.options.legend.innerHTML = legendHTML;
    }
  }
}


function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}