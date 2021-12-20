function add(first: number, second: number): number {
  return first + second;
}
const total2 = add(1, 2);

// void
function sayHello(): void {
  console.log('hello');
}

// never
function errorEmitter(): never {
  while(true) {}
}

function add2({ first, second }: { first: number, second: number}): string {
  return first + second + '';
}
const total3 = add2({ first: 2, second: 3 });

function getNumber({ first }: { first: number }): number {
  return first;
}
const count2 = getNumber({ first: 8 });
