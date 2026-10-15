document.addEventListener("DOMContentLoaded", () => {
  const discordButton = document.getElementById("discord-button");
  const year = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Add your Discord invite URL here if you want the community button to work.
  const discordUrl = "#";
  discordButton.href = discordUrl;
  year.textContent = new Date().getFullYear();

  discordButton.addEventListener("click", (event) => {
    if (discordButton.getAttribute("href") === "#") {
      event.preventDefault();
      alert("The Discord invite has not been set yet.");
    }
  });

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
