// interface 和 type 相类似，但并不完全一致
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

// 接口继承
interface ITeacher extends Person {
  teach(): string;
}

// 接口定义函数
interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
}

const setPersonName = (person: ITeacher, name: string): void => {
  person.name = name;
}

const person11 = {
  name: 'ts',
  sex: 18,
  say() {
    return 'say hello';
  },
  teach() {
    return 'say hello';
  }
};
getPersonName(person11); // 鸭子模型
setPersonName(person11, 'vue');

// class 类实现接口
class User11 implements Person {
  name: 'use';
  say() {
    return 'hello user';
  }
}

const say: SayHi = (word: string): string => word;
