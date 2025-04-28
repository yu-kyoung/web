//fouction2.js

function sum(num1 = 0, num2 = 0) { //매개변수의 초기값
  let result = 0;
  result = num1 + num2;
  return result; // 반환
}

function printStar(times = 1, shape = '⭐') {
  let str = '';
  for (let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);
}
//함수 호출
printStar(2, '🌞');

console.log(sum(10, 20));

//구구단을 출력하는 함수
function printGugudan(dan = 2) {
  for (let j = 1; j <= 9; j++) {
    document.write(`<p>${dan}X${j}=${dan*j}</p>`);
  }
}

printGugudan(13)