import Program from "./program";
/**
 * @class IfElseSatetment
 * @param {string} condition The condition to be checked.
 * @param {Function} fn The function to be executed if the condition is true.
 * @example 
 * 
 * let verified = true;
 * $.if(verified, () => {
 *  console.log("verified");
 * }).else(() => {
 * console.log("not verified");
 * });
 **/
class Statement {
    condition: any;
    fn: Function;
    constructor(condition: any, fn: Function) {
        this.condition = condition;
        this.fn = fn;
        if (typeof condition !== 'boolean') Program.error('statement', 'Expected a boolean')
        if (typeof fn !== 'function') Program.error('statement', 'Expected a function')
        if (condition && typeof condition === "boolean" && fn && typeof fn === 'function') {
            fn();
        }
        else {
            this.else;
        }
    }
    else(fn: Function) {
        if (typeof fn !== 'function') Program.error("statement", 'Expected a function for else statement')
        if (!this.condition && typeof fn === 'function') {
            fn();
        }
    }
}
export default Statement;
