const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer = new Uint32Array(imageData.data.buffer);

  const alpha = 50; // transparansi (10–20 recommended)

  for (let i = 0; i < buffer.length; i++) {
    const color = Math.random() * 80 | 0; // lebih soft (0–80)
    buffer[i] = (alpha << 24) | (color << 16) | (color << 8) | color;
  }

  ctx.putImageData(imageData, 0, 0);
}

let lastTime = 0;

function loop(time) {
  if (time - lastTime > 140) {
    generateNoise();
    lastTime = time;
  }
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);