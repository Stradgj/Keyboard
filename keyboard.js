import keys from "./keys.json";

export class Keyboard {
  constructor(root) {
    this.root = root;
  }
  renderKeyboard() {
    keys.forEach((key) => {
      this.root.innerHTML += `<div class="key" data-key=${key.key} data-code=${
        key.code
      } data-location =${key.location ? key.location : 0} >${key.key}</div>`;
    });
  }

  highlight(btn) {
    btn.classList.add("active-key");
  }

  removeHighlight(btn) {
    btn.classList.remove("active-key");
  }

  detectButton(event) {
    const btn = event;

    if (btn.location) {
      const btns = document.querySelectorAll(`[data-code ='${btn.which}']`);
      const activeBtn = btns[btn.location - 1];

      return activeBtn;
    }

    const activeBtn = document.querySelector(`[data-code ='${btn.which}']`);
    return activeBtn;
  }
}
