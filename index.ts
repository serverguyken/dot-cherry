import isVowel from './isVowel'
import withlowerCase from './withLowerCase';
import withUpperCase from './withUpperCase';
import ifElse from './ifElseSatetment';
import switchCase from './switchCase';
import findDuplicates from "./findDuplicates"
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
    duplicates(arr: any) {
        return findDuplicates(arr)
    }
    exit(n: number): number {
        return exit(n)
    }
}



function exit(int: number): any {
    // exit 
    if (int === 0) return 0
    if (int > 0) Program.error("program", `Failure: Exiting with code ${int}`)
}

export default new $;