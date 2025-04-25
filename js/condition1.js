//condition1.js
//조건문
let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
// isTrue = --num1 < 4 || num2++ == 10;// 앞이 참이면 뒤는 계산
isTrue = --num1 <= 4 && num2++ == 10; // 앞뒤 모두 계산
isTrue = ++num2 % 2; //true/false => truthy/falsy (0, "", null, undefied, NaN)
console.log(num1, num2)

if (isTrue) {
  // 참인 경우에 if블럭실행.
  console.log('참');
} else {
  // 거짓인 경우에 else블럭실행.
  console.log('거짓');
}