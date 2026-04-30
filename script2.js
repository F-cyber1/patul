const music = document.getElementById("music");
const video = document.getElementById("video");
const card = document.getElementById("card");

const fill = document.getElementById("fill");
const time = document.getElementById("time");
const ending = document.getElementById("ending");

/* START */
window.addEventListener("click", () => {
  music.play();
  video.play();
}, { once: true });

/* FLIP CARD */
card.addEventListener("click", () => {
  card.classList.toggle("flip");
});

/* LOVE + ICE CREAM 🍦 */
function createLove() {
  const el = document.createElement("div");
  el.classList.add("love");

  const emojis = ["💖", "💛", "🍦", "💙", "💝", "💕"];
  el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = window.innerHeight + "px";

  el.style.fontSize = (Math.random() * 22 + 12) + "px";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 5000);
}

/* BURST LOVE */
let i = 0;
const burst = setInterval(() => {
  createLove();
  i++;
  if (i > 120) clearInterval(burst);
}, 25);

/* CONTINUOUS LOVE */
setInterval(createLove, 300);

/* MUSIC PROGRESS */
music.addEventListener("timeupdate", () => {
  if (!music.duration) return;

  const percent = (music.currentTime / music.duration) * 100;
  fill.style.width = percent + "%";

  const m = Math.floor(music.currentTime / 60);
  const s = Math.floor(music.currentTime % 60);
  time.innerText = `${m}:${s < 10 ? "0"+s : s}`;
});

/* ENDING */
music.addEventListener("ended", () => {
  ending.style.display = "block";
});