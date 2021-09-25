import Program from "./program"

// jsdoc template
/**
 * @description Returns true if the value is a vowel.
 * @param {str} value
 * @returns {boolean}
 * @example
 * isVowel("egg") // true
 **/

function isVowel(str: string) {
    let _typeof = typeof str;
    if (_typeof === "string") {
       return  getVowel(str);
    }
    else {
        return Program.error("isVowel",`Cannot check if ${_typeof} is a vowel`)
    }
};
 

function getVowel(str: string) {
    const char = str.toLowerCase();
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