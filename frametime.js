(function () {




  let last = Date.now();
  let i = 0;
  const context2d = document.createElement("canvas").getContext("2d");
  context2d.canvas.width = 300;
  context2d.canvas.height = 150;
  context2d.canvas.style.border = "1px solid red";
  context2d.canvas.style.position = "fixed";
  context2d.canvas.style.right = "0";
  context2d.canvas.style.top = "0";
  context2d.canvas.style.transform = "scaleY(-1)";
  context2d.canvas.style.backgroundColor = "rgba(255,255,255, 1)";


  document.body.appendChild(context2d.canvas);

  const timeStamps = new Array(context2d.canvas.width);
  //measure time
  requestAnimationFrame(function stampTime() {

    context2d.clearRect(0, 0, context2d.canvas.width, context2d.canvas.height);
    requestAnimationFrame(stampTime);
    const now = Date.now();
    timeStamps[i % timeStamps.length] = Math.round((now - last));
    last = now;


    context2d.beginPath();
    context2d.moveTo(0, timeStamps[i % timeStamps.length]);
    for (let c = 1; c < timeStamps.length; c += 1) {
      context2d.lineTo(c, timeStamps[(c + i) % timeStamps.length]);
    }
    context2d.stroke();

    i += 1;

  });


}())