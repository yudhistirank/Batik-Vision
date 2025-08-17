function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  // Scroll to CTA
  const scrollBtn = document.getElementById("scroll-to-cta");
  const ctaSection = document.getElementById("cta");

  if (scrollBtn && ctaSection) {
    scrollBtn.addEventListener("click", () => {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
});
