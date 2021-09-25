import Program from "./program";
function withUpperCase(str: string, _designation: number) {
    if (_designation >= str.length) {
        return Program.error("withUpperCase",`Cannot convert properties of undefined to upperCase, character is more than the designation index`)
    }
    let _typeof = typeof str;
    if (_typeof === "string") {
        if (_designation || _designation === 0) {
            // capitalize the letter at the designated index
            let strArray = str.split("");
            strArray[_designation] = strArray[_designation].toUpperCase();
            return strArray.join("");
        }
        return str.toUpperCase();
    }
    else {
        return Program.error("withUpperCase",`Cannot convert ${_typeof} to upperCase`)
    }
}

export default withUpperCase; 