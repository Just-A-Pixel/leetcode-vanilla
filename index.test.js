
import {functions} from "./functions.js";

describe("index.html", () => {

    it("#Question 1: Phone formatting tests", () => {
        expect(functions.formatNumber("1234", 7, 'insertText')).toStrictEqual({"result":'(123) 4', "caretPosition": 7})
        expect(functions.formatNumber("123", 3, 'deleteContentBackward')).toStrictEqual({"result":'123', "caretPosition": 2})
        expect(functions.formatNumber("1234", 4, 'insertText')).toStrictEqual({"result":'(123) 4', "caretPosition": 7})
        expect(functions.formatNumber("1234567", 4, 'insertText')).toStrictEqual({"result":'(123) 456-7', "caretPosition": 4})

    })

    it("#Question 2: Check caret position", () => {
        expect(functions.formatUserInput("(123) 4", 7, 'insertText')).toStrictEqual({"result":'(123) 4', "caretPosition": 7})
        expect(functions.formatUserInput("123", 3, 'deleteContentBackward')).toStrictEqual({"result":'123', "caretPosition": 2})
        expect(functions.formatUserInput("(123) 4", 4, 'insertText')).toStrictEqual({"result":'(123) 4', "caretPosition": 7})
        expect(functions.formatUserInput("(123) 456-7", 10, 'insertText')).toStrictEqual({"result":'(123) 456-7', "caretPosition": 11})
        expect(functions.formatUserInput("(123) 456-78", 6, 'deleteContentBackward')).toStrictEqual({"result":'(123) 456-78', "caretPosition": 6})
        expect(functions.formatUserInput("(123) 456-78", 5, 'deleteContentBackward')).toStrictEqual({"result":'(123) 456-78', "caretPosition": 5})
    });
});
