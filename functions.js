
// Get the index to point the caret to.
// Key = length + currentCaretPos + inputType
const caretMapper = new Map([
    ["33deleteContentBackward", 2],
    ["74insertText", 7],
    ["1010insertText", 11]
])

export const functions = {
    formatUserInput: (value, selectionStart, inputType) => {
        const phoneNumber = functions.extractNumber(value);
        const formattedNumber = functions.formatNumber(phoneNumber, selectionStart, inputType);
        return formattedNumber
    },
    getCurrentCaret: () => {
        return currentCaret;
    },
    extractNumber: (value) => {
        const result = value.replace(/[^0-9]/gi, "");
        return result;
    },
    formatNumber: (value, caretPosition, inputType) => {
        var result = value;
        var length = value.length;
    
        // Handle bracket
        if (length >= 4) {
            result = "(" + value.slice(0, 3) + ") " + value.slice(3, length);
        }
    
        // Handle dash
        length = result.length;
        if (length >= 10) {
            result = result.slice(0, 9) + "-" + result.slice(9, length);
        }
    
        // Handle Caret Jumping
        const key = length.toString() + caretPosition.toString() + inputType
        caretPosition = caretMapper.has(key) ? caretMapper.get(key) : caretPosition

        if (length >= 4 && caretPosition == 1 && inputType==='insertText') {
            caretPosition = 2
        }
    
        return {result, caretPosition};
    }
}