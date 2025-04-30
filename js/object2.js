// object2.js
//배열내장객체 : new Array() 또는 []
//관련 매소드 : push,pop(뒤 제거),unshift,shift(앞제거) => forEach(반복)

let arr1 = [10, 20, 30]; //new Array();
arr1[3] = 40;
arr1.push(50); //메소드 추가
arr1.unshift(60);
//60,10,20,30,40,50
arr1.pop();
arr1.pop();
arr1.shift();
arr1.splice(1, 0, 15, 16, 17); //10,15,20,30 
// 첫째자리 인덱스, 둘째자리 대체할 숫자수, 셋째자리에 아무것도 않넣으면 삭제

//every-모든요소 만족, some-일부만 만족해도 됨
let result = arr1.some((item) => item % 2 == 1);
console.log(result);

arr1.forEach(function (item, idx, ary) { //익명함수
  console.log(item, idx); //a 배열요소
});

console.log(arr1);