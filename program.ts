class Program {
    // constructor(n: any) {
    //     this.n = n
    // }
    error(originator: string, message: string) {
        let error: any = new Error()
        error = `An error occured performing ${originator} method: ` + message
        throw error
    }
    show(value: any) {
        console.log(value)
    }
    showWithType(value: any) {
        console.log(typeof value, "<==>", value)
    }
}

const _Program = new Program(); 


export default _Program; // export default _Program;