// public, private, protected 访问类型

// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用

class Person13 {
  name: string;
  private sayAbc() {
    this.name;
  }
}

const person = new Person13();
person.name = 'hy';
// console.log(person);
console.log(person.name);

class Person13Two {
  // 传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化写法
  constructor(public name: string) {}
}

const personTwo = new Person13Two('hy');

