/*
  ANUBIS CLIENT — QUICK SETTINGS
  Update the links below before you publish the site.
*/
const SITE_SETTINGS = {
  // Replace # with your real public download URL (for example, your release page).
  downloadUrl: "https://github.com/jskemick-spec/673463b/releases/download/tag2/Anubis.Beta.0.9.9.1.jar",
  // Replace # with your Discord invite URL.
  discordUrl: "https://discord.gg/anubis"
};

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");
  const discordButton = document.getElementById("discord-button");
  const year = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");

  downloadButton.href = SITE_SETTINGS.downloadUrl;
  discordButton.href = SITE_SETTINGS.discordUrl;
  year.textContent = new Date().getFullYear();

  // Avoid sending visitors to the top of the page while links are placeholders.
  for (const link of [downloadButton, discordButton]) {
    link.addEventListener("click", (event) => {
      if (!link.href || link.getAttribute("href") === "#") {
        event.preventDefault();
        alert("This link has not been set yet. Add your URL in script.js.");
      }
    });
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
});
