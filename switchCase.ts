import Program from "./program";
import $ from "./"
function switchCase(condition: any, cases: any) {
    if(cases[condition]) cases[condition]()
    if(!cases[condition]) cases.default()
     // get typeof keys in values
    // get key from each value
    // const keys = Object.keys(values);Program.showWithStyle(Boolean(keys));
    // // get value from each key
    // const valuesArray = keys.map(key => values[key]);
    // keys.forEach((key, index) => {
    //     if (type === "number") {
    //         let k = parseInt(key);
    //         if (condition === k) {
    //             return valuesArray[index];
    //         }
    //     }
    //     if (type === "string") {
    //         if (condition === key) {
    //             return valuesArray[index];
    //         }
    //     }
    //     if(condition === key){  
    //         return valuesArray[index];
    //     }
    // });
    // if(condition === values[0]){
    //     return values[1];
    // }
    // const method = {
    //     perform: (callback: Function) => {
    //         const method = {
    //             else: (callback: Function) => {
    //                 callback()
    //             }
    //         }
    //         return method;
    //     },
    // };
    //return method;
}


export default switchCase;

//$.switchCase(condition, ['kenny', 'test']).toBe("kenny").perform(s).default()