const match = <T>(expr: T, cases: { [key: string]: (value?: T) => void }) => (value: T): any => {
    const entries = Object.entries(cases);
    for (const [pattern, handler] of entries) {
        const p: any = pattern;
       if (expr === p) {
           return typeof handler === 'function' ? handler(value) : handler;
        }
    }
    if (cases['default']) {
        return typeof cases.default === 'function' ? cases.default(value) : cases.default;
    }
    return null;
};

export default match; 

match(1, {
    1: () => 'one',
    2: () => 'two',
    default: () => 'other',
});