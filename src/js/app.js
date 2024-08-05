import Character from "../js/character.js";

document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector(".field");
  const character = new Character(field);

  character.addCharacter();

  setInterval(() => {
    character.deleteCharacter();
    character.addCharacter();
  }, 2000);
});

const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}