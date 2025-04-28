// for1.js
let sum = 0;
for (let i = 1; i <= 5; i++) { // 초기값 / 조건 / 증감식
  sum = sum + i;
}
console.log('sum의 값은' + sum);


//1~20 반복 => 짝수인 경우합을 구하시오.
let sum1 = 0;
for (let j = 1; j <= 20; j++) {
  if (j % 2 == 0) { //조건 :짝수일때
    sum1 = sum1 + j; //누적
  } //end of if
}//end of for
console.log('sum1의 값은' + sum1);