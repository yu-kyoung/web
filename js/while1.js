//while1.js
//1~10까지의 값중에서 홀수 값만 콘솔에 출력

// for (let i = 1; i <= 10; i++) {
//   if (i % 2) {
//     console.log(i);
//   }
// }
//반복 횟수와 상관 없이 조건을 만족하는 동안만 반복.
// let no = 1;
// while (true) {
//   if (no % 2) {
//     console.log(no);
//   }
//   no++;//증감
//   if (no >= 10) {
//     break;//반복종료
//   }
// }

//임의의 값 (0~100) 생성하다가 50 보다 작은 값이 나오면 반복종료
let running=true;
while(running){
  let num = Math.floor(Math.random()*101);//0<=x<101
  console.log(num);

  if(num == 100){
    // break; 종료 조건 
    running=false;
  }
}
console.log("end of prog.");