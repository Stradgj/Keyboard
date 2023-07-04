import "./style.css";
import { Keyboard } from "./keyboard.js";
import { generateSentence } from "./sentenceGenerator";
import { ERROR_MESSAGE } from "./config";

const keyboardEl = document.querySelector(".keyboard");
const textField = document.querySelector(".text");
const keyboard = new Keyboard(keyboardEl);

keyboard.renderKeyboard();

document.addEventListener("keydown", function (event) {
  const activeBtn = keyboard.detectButton(event);
  keyboard.highlight(activeBtn);
});

document.addEventListener("keyup", function (event) {
  const activeBtn = keyboard.detectButton(event);
  keyboard.removeHighlight(activeBtn);
});

(async function () {
  try {
    const randomText = await generateSentence();
    textField.textContent = randomText.text;
    document.addEventListener("keydown", async function (event) {
      if (textField.textContent[0] === event.key) {
        textField.textContent = textField.textContent.slice(1);
      }
      if (textField.textContent.length < 50) {
        const randomText = await generateSentence();
        textField.textContent += " " + randomText.text;
      }
    });
  } catch (err) {
    textField.textContent = ERROR_MESSAGE;
  }
})();
