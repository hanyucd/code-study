/*
  type annotation 类型注解, 我们来告诉 TS 变量是什么类型
  type inference 类型推断, TS 会自动的去尝试分析变量的类型

  如果 TS 能够自动分析变量类型，我们就什么也不需要做了
  如果 TS 无法分析变量类型的话，我们就需要使用类型注解
 */

const firstNum = 1;
const secondNum = 2;
const totalNum = firstNum + secondNum;

function getTotal(firstNum: number, secondNum: number) {
  return firstNum + secondNum;
}

const total = getTotal(8, 9);
