import { functions } from "./functions.js";

const inputBox = document.getElementById("phone");
inputBox.addEventListener("input", (e) => {
    const { result, caretPosition } = functions.formatUserInput(
        e.target.value,
        e.target.selectionStart,
        e.inputType
    );
    inputBox.value = result;
    window.setTimeout(() => {
        inputBox.setSelectionRange(caretPosition, caretPosition);
    }, 0);
});
