// object3.js

// indexOf()

let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(333); //찾는 요소가 없으면 -1, 문자열에서도 사용가능

console.log(result);


let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function (item) {
  if (item.indexOf("홍") == 0) { //성씨가 홍씨인 사람  != -1
    console.log(item);
  }
});


//배열 이름 numAry(변수) => 10~50 사이의 값을 10개를 저장=> 콘솔에 출력(forEach);

let numAry = []
for (i = 1; i <= 10; i++) {
  let no = 10 + Math.floor(Math.random() * 41);
  numAry.push(no);
}
console.log(numAry);

//10~50사이의 값이 맞는가
let result1 = numAry.every(item => item >= 10 && item <= 50);
console.log(result1);
//위와 같음
result = numAry.every(function (item) {
  if (item >= 10 && item <= 50) {
    return true;
  } else {
    return false;
  }
})


result = numAry.every(function (item) {
  return item >= 10 && item <= 50;
})

numAry.forEach(function (item, idx) {
  console.log(item, idx);
})