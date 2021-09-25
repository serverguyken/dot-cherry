import Program from "./program";
function withlowerCase(str: string) {
    let _typeof = typeof str;
    // }
    if (_typeof === "string") {
        return str.toLowerCase();
    }
    else {
        return Program.error("withLowerCase",`Cannot convert ${_typeof} to lowerCase`)
    }
}

export default withlowerCase; 