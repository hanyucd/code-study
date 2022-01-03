interface IITem {
  name: string;
}

class DataManage<T extends IITem> {
  constructor(private data: T[]) {}

  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManage([{
  name: 'ts'
}])

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}

const func: <T>(param: T) => T = hello;
