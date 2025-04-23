// script/script.js

document.addEventListener("DOMContentLoaded", () => {

  Swal.fire({
    title: 'Selamat Datang!',
    text: 'Tekan tombol di bawah untuk mulai menjelajahi landing page.',
    imageUrl: 'assets/img/kepala_kebo-4.png',
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: 'Ikon Selamat Datang',
    confirmButtonText: 'Mulai Jelajahi',
    customClass: {
      confirmButton: 'custom-swal-button'
    }
  });
  

  // Toggle menu burger
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // Tutup menu saat klik link (untuk mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });

  // Smooth scroll untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});


