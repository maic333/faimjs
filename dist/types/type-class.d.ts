interface TypeClass<T extends object = {}> {
    new (...args: any[]): T;
}
export default TypeClass;
