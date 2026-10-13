// Personal portfolio interactions

// Update the copyright year automatically
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reveal sections smoothly as they enter the screen
const sectionsToReveal = document.querySelectorAll(
  "main > section:not(.hero)"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  sectionsToReveal.forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });
} else {
  sectionsToReveal.forEach((section) => {
    section.classList.add("visible");
  });
}

// Smooth navigation for links pointing to page sections
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});