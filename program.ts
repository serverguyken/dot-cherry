class Program {
    // constructor(n: any) {
    //     this.n = n
    // }
    error(originator: string, message: string) {
        let error: any = new Error()
        error = `An error occured performing ${originator} method: ` + message
        throw error
    }
    show(...args: any[]) {
        for (let i = 0; i < args.length; i++) {
            console.log(args[i])
        }
    }
    showWithType(...args: any[]) {
        for (let i = 0; i < args.length; i++) {
            console.log(typeof args[i], "<==>", args[i])
        }
    }
}

const _Program = new Program(); 


export default _Program; // export default _Program;