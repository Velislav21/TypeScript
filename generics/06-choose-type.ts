type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key];
}
type Test = {
    name: string;

    age: number;

    test: () => string;
};
type Extracted = Choose<Test, "name" | "test">;
