const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const faqButtons = document.querySelectorAll(".faq-question");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("open");
  });
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.contains("open");
    faqButtons.forEach((btn) => {
      const parent = btn.closest(".faq-item");
      if (parent) parent.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
