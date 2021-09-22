import Program from "./program";
function withUpperCase(_char: string, _designation: number) {
    if (_designation >= _char.length) {
        return Program.error("withUpperCase",`Cannot convert properties of undefined to upperCase, character is more than the designation index`)
    }
    let _typeof = typeof _char;
    if (_typeof === "string") {
        if (_designation || _designation === 0) {
            // capitalize the letter at the designated index
            let _charArray = _char.split("");
            _charArray[_designation] = _charArray[_designation].toUpperCase();
            return _charArray.join("");
        }
        return _char.toUpperCase();
    }
    else {
        return Program.error("withUpperCase",`Cannot convert ${_typeof} to upperCase`)
    }
}

export default withUpperCase; 