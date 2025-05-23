// function4.js
//함수+ 반복문 +배열:

let num = 10;
num = "10,홍길동";

let numAry = [10, 20]; // new Array();
// 배열 인덱스는 0부터 시작 
numAry[2] = 30; //추가
numAry[3] = 50; //추가
numAry[4] = "Hong"; //가능은 하지만 사용 X
numAry[4] = 70; //추가/변경
numAry[5] = 90; //추가
numAry[6] = 110; //추가

console.log(numAry[4]);
console.log(`배열의 크기 : ${numAry.length}`); // ★크기(갯수)를 알수 있음

//배열 + for 반복문
for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값은 : ${i}, 배열의 값 : ${numAry[i]}`);
}

//연산가능
console.log(`numAry[6]-numAry[2] => ${numAry[6]-numAry[2]}`);

//배열의 합
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  // if (i % 2 == 0) //인덱스가 짝수일때 만
  if (numAry[i] > 50) {
    sum += numAry[i];
  }
}
console.log(`sum => ${sum}`);


//배열이름이 ages 27,28,25,30,31,36
let ages = [27, 28, 25, 30, 31, 36];
//나이가 제일 많은 사람은?
function getMax(param1 = []) {
  let max = 0; //max (초기값 = 0)
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] > max) {
      max = param1[i];
    }
  }
  console.log(`${max}이 제일 나이많음`)
}

getMax(ages);
getMax([30, 17, 22, 34, 27]);

//제일 작은값 getMinValue(매개값으로 배열)
let result = getMinValue([20, 27, 17, 30,15]);

function getMinValue(param = []) {
  let min = param[0]; //중요 : 최소값에서 0은 안됨
  for (let i = 0; i < param.length; i++) {
    if (param[i] < min) {
      min = param[i];
    }
  }
  return min; //반환
}
console.log(`결과는 ${result}`)
