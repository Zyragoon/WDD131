const themeSelect = document.querySelector("#theme-select");
const logo = document.querySelector("#byui-logo");

themeSelect.addEventListener("change", () => {
    const isDark = themeSelect.value === "dark";

    document.body.classList.toggle("dark-theme", isDark);
    logo.src = isDark ? "byui-logo-white.png" : "byui-logo-blue.webp";
});