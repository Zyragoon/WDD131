const menuButton = document.querySelector(".menu-link");
const siteLinks = document.querySelector(".desktop-links");
const gallery = document.querySelector(".gallery");
const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer-image");
const closeViewerButton = document.querySelector(".close-viewer");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  siteLinks.classList.toggle("open", isOpen);
});

siteLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuButton.setAttribute("aria-expanded", "false");
    siteLinks.classList.remove("open");
  }
});

gallery.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLImageElement)) {
    return;
  }

  viewerImage.src = event.target.src.replace(/-sm(?=\.[^.]+$)/, "-full");
  viewerImage.alt = event.target.alt;
  viewer.showModal();
});

closeViewerButton.addEventListener("click", () => {
  viewer.close();
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});
