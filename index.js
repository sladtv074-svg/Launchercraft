const GAME_URL = "https://eaglercraft.ir/";

const pageNames = {
  play: ["Launchcraft", "Web Edition"],
  mods: ["Mods", "Gestion des modifications"],
  faq: ["FAQ", "Questions fréquentes"],
  installations: ["Installations", "Versions disponibles"],
  skins: ["Skins", "Personnalisation"],
  patchnotes: ["Patch Notes", "Historique des versions"],
  settings: ["Réglages", "Préférences"],
  credits: ["Crédits", "À propos de Launchcraft"]
};

function openPage(page) {
  document.querySelectorAll(".page").forEach(element => {
    element.classList.remove("active");
  });

  const target = document.getElementById("page-" + page);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-button[data-page]").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });

  const names = pageNames[page] || pageNames.play;
  document.getElementById("header-title").textContent = names[0];
  document.getElementById("header-subtitle").textContent = names[1];
}

function launchGame() {
  const overlay = document.getElementById("game-overlay");
  const frame = document.getElementById("game-frame");
  const message = document.getElementById("frame-message");

  message.classList.remove("visible");
  frame.src = GAME_URL;
  overlay.classList.add("visible");
  overlay.setAttribute("aria-hidden", "false");

  // Fallback informatif si l'intégration distante ne fonctionne pas.
  setTimeout(() => {
    message.classList.add("visible");
  }, 7000);
}

function closeGame() {
  const overlay = document.getElementById("game-overlay");
  const frame = document.getElementById("game-frame");

  frame.src = "about:blank";
  overlay.classList.remove("visible");
  overlay.setAttribute("aria-hidden", "true");
  document.getElementById("frame-message").classList.remove("visible");
}

function toggleAnimations(enabled) {
  document.body.classList.toggle("no-animations", !enabled);
}

openPage("play");
