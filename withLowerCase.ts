import Program from "./program";
function withlowerCase(_char: string) {
    let _typeof = typeof _char;
    // }
    if (_typeof === "string") {
        return _char.toLowerCase();
    }
    else {
        return Program.error("withLowerCase",`Cannot convert ${_typeof} to lowerCase`)
    }
}

export default withlowerCase; 