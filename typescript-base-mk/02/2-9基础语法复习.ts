// 基础类型, boolean, number, string, void, undfined, symbol, null
let count9: number;
count9 = 123;

// 对象类型, {}, Class, function, []
const func9_one = (str: string): number => {
  return parseInt(str, 10);
}

const func9_two: (str: string) => number = str => {
  return parseInt(str, 10);
}

// 时间对象
const date: Date = new Date();

interface Person {
  name: string;
  age?: number;
}
const rawData = '{"name": "TS"}';
const newData: Person = JSON.parse(rawData);

// 联合类型
let temp9: number | string = 123;
temp9 = '456';
