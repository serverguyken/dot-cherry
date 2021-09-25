import isVowel from './isVowel'
import withlowerCase from './withLowerCase';
import withUpperCase from './withUpperCase';
import ifElse from './ifElseSatetment';
import switchCase from './switchCase';
import Program from './program';
import run from './run';

class $ {
    assignIandV: any;
    constructor() {
        this.assignIandV = this.assignIandV
    }
    run(str: string) {
        console.log(str);
    }
    isVowel(str: string) {
        return isVowel(str)
    }
    isConsonant(str: string) {
        return !isVowel(str)
    }
    withLowerCase(str: string) {
        return withlowerCase(str)
    }
    withUpperCase() {
        return withUpperCase
    }
    if(condition: any, fn: Function) {
        return new ifElse(condition, fn)
    }
    switch(condition: any, cases: any) {
        return switchCase(condition, cases)
    }
    exit() {
        return exit
    }
}
// function $() {
//     let assignIandV: any;
//     const methods = {
//         run: function (str: string) {
//             Program.showWithType(str);
//         },
//         assign(i: any, v: any) {
//             if (assignIandV) return assignIandV
//             return window[i] = v
//         },
//         get(i: any) {
//             if (assignIandV) return assignIandV
//             return window[i]
//         },
//         isVowel: isVowel,
//         isConsonant: (char: string) => !isVowel(char),
//         withLowerCase: withlowerCase,
//         withUpperCase: withUpperCase,
//         if: ifElse,
//         switch: switchCase,
//         exit: exit,
//     }
//     return methods
// }

function exit(int: number): any {
    if (int === 0) return
    return exit(int - 1)
}

export default new $;