import Program from "./program"

// jsdoc template
/**
 * @description Returns true if the value is a vowel.
 * @param {_char} value
 * @returns {boolean}
 * @example
 * isVowel("egg") // true
 **/

function isVowel(_char: string) {
    let _typeof = typeof _char;
    if (_typeof === "string") {
       return  getVowel(_char);
    }
    else {
        return Program.error("isVowel",`Cannot check if ${_typeof} is a vowel`)
    }
};
 

function getVowel(_char: string) {
    const char = _char.toLowerCase();
    const getCorV = char.substring(0, 1);
    if (
        getCorV === "a" ||
        getCorV === "e" ||
        getCorV === "i" ||
        getCorV === "o" ||
        getCorV === "u"
    ) {
        return true;
    } else {
        return false;
    }
}
export default isVowel;