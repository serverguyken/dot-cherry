import isVowel from './isVowel'
import withlowerCase from './withLowerCase';
import withUpperCase from './withUpperCase';
import ifElse from './ifElseSatetment';
import switchCase from './switchCase';
function $() {
    let assignIandV: any;
    const methods = {
        
        assign(i: any, v: any) {
            if (assignIandV) return assignIandV
            return window[i] = v
        },
        get(i: any) {
            if (assignIandV) return assignIandV
            return window[i]
        },
        isVowel: isVowel,
        isConsonant: (char: string) => !isVowel(char),
        withLowerCase: withlowerCase,
        withUpperCase: withUpperCase,
        if: ifElse,
        switch: switchCase,
        exit: exit,
    }
    return methods
}

function exit(int: number): any {
    if(int === 0) return
    return exit(int - 1)
}

export default $();