import Program from "./program";
import $ from "./"
function switchCase(condition: any, cases: any) {
    if(cases[condition]) cases[condition]()
    if(!cases[condition]) cases.default()
}


export default switchCase;