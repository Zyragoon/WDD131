const menuButton = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("change");
  mainNav.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
});