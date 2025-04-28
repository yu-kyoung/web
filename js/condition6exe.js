//condition6exe.js

// 1. 2개의 수를 입력(). 큰 값을 콘솔에 출력.(콘솔로그)"두수중에서 큰큰값은 28입니다."if
// 2. 임의의 2개의 수를 (매스랜덤) 값의범위는 40-70까지 생성."2개의 수중에서 큰값은 ??,
//  작은값은 ??"
// 3. 컨디션 3에 ABCDF 95점 이상이면 A+ B+ c+ d+ f로 더 잘개 나누기
// 4. 반복문(537p 연습)

//1번
let num1 = prompt("숫자를 입력하세요1");
console.log(num1);
let num2 = prompt("숫자를 입력하세요2");
console.log(num2);

if (num1 == num2) {
  console.log('2개의 수는 ', (num1), '으로 같습니다.');
} else if (num1 > num2) {
  console.log('2개의 수 중에서 큰값은 ' + num1 + '입니다.');
} else {
  console.log('2개의 수 중에서 큰값은 ' + num2 + '입니다.');
}

//2번
let result1 = 40 + Math.floor(Math.random() * 31); //40<= x <=70
console.log(result1);
let result2 = 40 + Math.floor(Math.random() * 31);
console.log(result2);

if (result1 == result2) {
  console.log("2개의 수는 ", (result1), "으로 같습니다.");
} else if (result1 > result2) {
  console.log("2개의 수 중에서 큰값은", (result1), "입니다.");
} else {
  console.log("2개의 수 중에서 큰값은", (result2), "입니다.");
}

// 3번
let result = 30 + Math.floor(Math.random() * 71);
console.log(result);

if (result >= 95) {
  console.log("A+");
} else if (result >= 90) {
  console.log("A");
} else if (result >= 85) {
  console.log("B+");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 75) {
  console.log("C+");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 65) {
  console.log("D+");
} else if (result >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//4.
let sum = 0;

for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log('1부터 100까지 더하면', (sum));

//j = 1~50
for (let j = 1; j < 51; j++) {
  if (j % 3 === 0) {
    console.log((j));
  }
}