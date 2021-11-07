// 基础类型 number, string, boolean, null, undefined, void ...
const count: number = 123;
const teacherName: string = 'HY';

// 对象类型
const teacher: { name: string, age: number } = { name: 'hy', age: 24 };

// 数字数组
const numbers: number[] = [1, 2, 3];

// 类
class Person {}

const tsPerson: Person = new Person();

// 函数类型
type getTotalType = () => number; // type: 类型别名
// const getTotalFunc: () => number = () => {
//   return 123;
// };
const getTotalFunc: getTotalType = () => {
  return 123 + 520;
};
