const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

const audio = document.getElementById("audio");
const lyricsBox = document.getElementById("lyrics");
const button = document.getElementById("butonid");




// ================= NOISE =================
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer = new Uint32Array(imageData.data.buffer);

  const alpha = Math.random() * 60;

  for (let i = 0; i < buffer.length; i++) {
    const color = (Math.random() * 80) | 0;
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

// ================= AUDIO START =================
function PlayAudio() {
  audio.play();
  button.style.display = "none";
  showLyrics();
}

// ================= LYRICS DATA =================
const lyrics = [
  { time: 2.24, text: "Melihat dengan" },
  { time: 5.87, text: "sebelah matamu" },
  { time: 9.60, text: "<span class=\"highlight\">Aku bukan siapa-siapa</span>", dur: 5.3 },

  { time: 15.12, text: "coba kau lihat" },
  { time: 18.27, text: "<span class=\"highlight\">dirimu dahulu</span>" },

  { time: 22.12, text: "sebelum kau nilai" },
  { time: 25.78, text: "<span class=\"highlight\">kurangnya diriku</span>", dur: 3.8 },

  { time: 30.03, text: "apa salahnya" },
  { time: 33.24, text: "hargai diriku" },

  { time: 36.93, text: "sebelum kau" },
  { time: 38.75, text: "nilai siapa diriku", dur: 6.0 } // Biar lirik terakhir stay sampe lagu beneran abis
];

// ================= SHOW LYRICS =================
let activeLyric = null;
let lyricInterval;

function showLyrics() {
  lyricInterval = setInterval(() => {
    let t = audio.currentTime;

    let current = [...lyrics].reverse().find(l => t >= l.time);

    let maxDisplayTime = current && current.dur ? current.dur : 3.5;

    if (current && t > current.time + maxDisplayTime) {
        current = null;
    }

    if (current) {
      if (activeLyric !== current.text) {
        
        const oldLines = document.querySelectorAll('.lyric-line');
        oldLines.forEach(line => {
            line.classList.remove('active');
            setTimeout(() => line.remove(), 400); 
        });

        const newLine = document.createElement('div');
        newLine.className = 'lyric-line';
        newLine.innerHTML = current.text; 
        lyricsBox.appendChild(newLine);

        setTimeout(() => {
            newLine.classList.add('active');
        }, 10);

        activeLyric = current.text;
      }
    } else {
      if (activeLyric !== null) {
        const oldLines = document.querySelectorAll('.lyric-line');
        oldLines.forEach(line => {
            line.classList.remove('active');
            setTimeout(() => line.remove(), 400);
        });
        activeLyric = null;
      }
    }
  }, 100);
}

// ================= SAAT LAGU SELESAI =================
audio.addEventListener("ended", () => {
    clearInterval(lyricInterval);
    
    const oldLines = document.querySelectorAll('.lyric-line');
    oldLines.forEach(line => {
        line.classList.remove('active');
        setTimeout(() => line.remove(), 400);
    });
    activeLyric = null;

    button.style.display = "block"; 
});