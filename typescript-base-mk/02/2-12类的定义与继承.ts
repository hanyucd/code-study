
class Person {
  name = 'person';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacher() {
    return 'teacher';
  }
  getName() {
    return super.getName() + ' teacher';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacher());
