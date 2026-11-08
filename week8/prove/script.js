const character = {
  name: "Typhlosion",
  class: "Volcano Pokemon",
  level: 36,
  health: 170,
  image: "images/typhlosion.jpg",
  attacked() {
    this.health = Math.max(0, this.health - 10);
    return this.health === 0;
  },
  levelUp() {
    this.level += 1;
  }
};

const nameElement = document.querySelector("#character-name");
const imageElement = document.querySelector("#character-image");
const classElement = document.querySelector("#character-class");
const levelElement = document.querySelector("#character-level");
const healthElement = document.querySelector("#character-health");
const statusElement = document.querySelector("#character-status");
const attackButton = document.querySelector("#attack-button");
const levelUpButton = document.querySelector("#level-up-button");

function renderCharacter() {
  nameElement.textContent = character.name;
  imageElement.src = character.image;
  imageElement.alt = `${character.name}, art by GIDORA`;
  classElement.textContent = character.class;
  levelElement.textContent = character.level;
  healthElement.textContent = character.health;
  statusElement.textContent = character.health === 0
    ? `${character.name} has fainted.`
    : "";
  attackButton.disabled = character.health === 0;
  levelUpButton.disabled = character.health === 0;
}

attackButton.addEventListener("click", () => {
  character.attacked();
  renderCharacter();
});

levelUpButton.addEventListener("click", () => {
  character.levelUp();
  renderCharacter();
});

renderCharacter();