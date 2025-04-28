//for2.js

//1부터 10까지 반복.
//2의 배수 3의배수   =>2의 배수는 sum2 저장
//3의 배수는 sum3에 저장.

let sum2 = 0,
  sum3 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  } else if (i % 3 == 0) {  //6은 2의 배수로 취급했음
    sum3 += i;
  }
}
console.log('2의 배수 합' + sum2);
console.log('3의 배수 합' + sum3);

