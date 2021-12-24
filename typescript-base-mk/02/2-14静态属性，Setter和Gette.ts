// getter and setter
class Person14 {
  constructor(private name: string) {}
  get gName() {
    return this.name;
  }
  set sName(name: string) {
    this.name = name;
  }
}

const person14 = new Person14('hy');
// person14.name; // 无法访问私有属性
person14.gName; // 通过 getter 访问类属性
person14.sName = 'hyTs';
console.log(person14);

// 单例模式
class DExample {
  private constructor(public name: string) {}

  private static instance: DExample;

  static getInstance() {
    if (!this.instance) {
      this.instance = new DExample('hy');
    }
    return this.instance;
  }
}

const dExample1 = DExample.getInstance()
const dExample2 = DExample.getInstance()
console.log(dExample1);
console.log(dExample2);
