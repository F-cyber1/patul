const pujianList = [
  "Jangan lupa makan Queen dan syupir ",
  "Terima kasih syudah menjadi teman king",
  "Aku senang bisa bertemu dengan teman baik sepertimu, semoga kita bisa berteman lebih lama dan tidak asing.",
  "Semoga di kehidupan singkat ini, kamu bisa melewati hari-harimu dengan bahagia, makan enak dan tetap sehat",
  "Jika harimu terasa berat ingatlah, itu hari mu bukan hari ku hehe"
];

function tampilPujian() {
  const random = pujianList[Math.floor(Math.random() * pujianList.length)];
  document.getElementById("pujian").innerText = random;
  buatHati();
}

function buatHati() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}