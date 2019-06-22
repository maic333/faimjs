interface TypeClass<T extends object = {}> {
  /* tslint:disable-next-line no-any */
  new (...args: any[]): T;
}

export default TypeClass;
