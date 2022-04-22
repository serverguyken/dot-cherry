import isVowel from './isVowel'
import withlowerCase from './withLowerCase';
import withUpperCase from './withUpperCase';
import ifElse from './ifElseSatetment';
import switchCase from './switchCase';
import match from './match';
import findDuplicates from "./findDuplicates"
import Program from './program';
class $ {
    assignIandV: any;
    constructor() {
        this.assignIandV = this.assignIandV
    }
    /**
     * Print a message to the console
     * @param args 
     */
    print(...args: any[]) {
        console.log(...args)
    }
    /**
     * Check if the given string is a vowel
     * @param str 
     * @returns boolean
     */
    isVowel(str: string) {
        return isVowel(str)
    }
    /**
     * Check if the given string is a consonant
     * @param str 
     * @returns boolean
     */
    isConsonant(str: string) {
        return !isVowel(str)
    }
    /**
     * Convert a string to lowercase
     * @param str 
     * @returns string
     */
    withLowerCase(str: string) {
        return withlowerCase(str)
    }
    /**
     * Convert a string to uppercase
     * @param str
     * @returns string
     */
    withUpperCase() {
        return withUpperCase
    }
    /**
     * Check if a given value is truthy
     * @param condition 
     * @param fn 
     * @returns void
     */
    if(condition: any, fn: Function) {
        return new ifElse(condition, fn)
    }
    /**
     * Perform an action based on the given condition
     * @param condition 
     * @param cases 
     * @returns void
     */
    switch(condition: any, cases: any) {
        return switchCase(condition, cases)
    }
    /**
     * Check if a given value matches a given pattern
     * @param expr 
     * @param cases 
     * @returns void
     */
    match<T>(expr: T, cases: { [key: string]: (value?: T) => void }) {
        return match(expr, cases)
    } 
    /**
     * Find duplicates in an array
     * @param arr 
     * @returns array
     */
    duplicates(arr: any) {
        return findDuplicates(arr)
    }
    /**
     * Exit the program
     * @param {number} n
     * @returns number |void
     */
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