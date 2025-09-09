import './style.css'

// ✅ Navbar Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-[#222831]/90", "backdrop-blur-md", "shadow-lg");
  } else {
    navbar.classList.remove("bg-[#222831]/90", "backdrop-blur-md", "shadow-lg");
  }
});


// ✅ Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// ✅ Highlight active menu saat klik
const links = document.querySelectorAll("header a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("text-[#00ADB5]"));
    link.classList.add("text-[#00ADB5]");
  });
});


