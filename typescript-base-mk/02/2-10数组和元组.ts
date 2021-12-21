// 数组
const arr: (number | string)[] = [1, '2,', 3, 4, '5'];
const strArr: string[] = ['a', 'b', 'c'];

// type alias 类型别名
type User = { name: string; age: number; };

const objArr: User[] = [
  { name: 'hanyu', age: 24 }
];

// 元组 tuple
const techerInfo: [string, string, number] = ['str', 'text', 1];
// csv 元组类型数组
const teacherList: [string, string, number][] = [['dell', 'male', 19], ['sun', 'female', 26], ['jeny', 'female', 38]];
