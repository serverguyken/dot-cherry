import Program from "./program";

function ifElse(condition: any, callback: Function) {
    if (!condition) return Program.error("ifElse", "condition is not defined");
    if (!callback) return Program.error("ifElse", "callback is not defined");
    if(!condition && !callback) return Program.error("ifElse", "condition and callback are not defined");
    if (condition) {
       callback();
    }
    const method = {
        else: (callback: Function) => {
            console.log(callback);
            
            if (!callback) return Program.error("ifElse", "callback is not defined");
            if (!condition) {
                callback();
            }
        }
    }
    return method;
}

export default ifElse;