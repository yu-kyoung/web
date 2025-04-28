// function.js
//2개의 수를 더하고 큰값에 10을 다하고 작은값에는 5를 더한 후 합을 구하라

//함수의 정의
function sum(parameter1, parameter2) {
  let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter1 + 5) + (parameter2 + 10);
  }
  // console.log(`결과값 ${result}`);
  return result; //return :함수를 호출한 영역으로 결과 반환
}


let num1 = 4, num2 = 2;
let result = sum(4 , 2);
console.log(`결과값 ${result}`);
result = sum(20,19);
document.write(`결과값 ${result}`);
alert(`결과값 ${result}`);
// document.querySelector(`#result`).value = result;

// let result = 0;
// if (num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num1 + 5) + (num2 + 10);
// }
// console.log(`결과값 ${result}`);