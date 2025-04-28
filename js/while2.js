// while2.js

//사용자에게 1~10까지 임의의 수를 입력.
//범위 밖의 값을 입력하면 종료 입력값의 누적합을 콘솔에 출력.

let sum = 0;

while (true) {

  if (num < 1 || num > 10) {
    break;
  }
sum += num;
}
console.log(`누적값은 ${sum} 입니다.`);