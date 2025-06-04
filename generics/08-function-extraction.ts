type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctionsOnly<T> = Pick<T, FunctionKeys<T>> 

type Test2 = {
    name: string;
    age: number;
    test: () => string;
}

type Extracted2 = FunctionKeys<Test2>