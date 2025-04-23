const messages = [
  "Halooo babyyy",
  "Baby gimana hari ini? pasti cape ya? abis ini kita cerita yaaa",
  "Maaf ya sayang aku nda cerita soal donor darah tadiiii",
  "Aku minta maaf juga sama kamu sayang untuk kata-kata aku tadi siang yang tidak pantas dikeluarkan, aku minta maaff yaaa sayangg",
  "Aku bener-bener mau ko nempuh semua proses bareng-bareng sama kamu biar nantinya kita bisa sama-sama seneng pada akhirnyaaa sayangg",
  "Aku sayang kamu, aku cinta kamu, aku mau kita sama-sama berjuang bareng-bareng yaaa sayangg",
  "Aku sayang kamu, love you sayangg❣️",
];

// const typingText = document.getElementById("typingText");
// // const cursor = document.getElementById("cursor");
// let messageIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < messages[messageIndex].length) {
//     typingText.textContent += messages[messageIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, 100);
//   } else {
//     setTimeout(() => {
//       typingText.textContent = "";
//       charIndex = 0;
//       messageIndex = (messageIndex + 1) % messages.length;
//       type();
//     }, 2000);
//   }
// }

const typingText = document.querySelector(".typing-text");
let messageIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < messages[messageIndex].length) {
    // Tambahkan karakter ke teks
    typingText.textContent = messages[messageIndex].slice(0, charIndex + 1);
    charIndex++;
    setTimeout(type, 100); // Kecepatan mengetik
  } else {
    setTimeout(() => {
      // Reset teks setelah pesan selesai
      typingText.textContent = "";
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      type();
    }, 2000); // Jeda sebelum pesan berikutnya
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
