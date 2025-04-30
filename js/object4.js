// object4.js
//filter() 조건을 만족하는 새로운 배열 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52]
let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 == 0) { //짝수
    return true;
  }
  return false;
  //return undefined =>falsy;
});

console.log(filterAry);

//////////////////////////////
//salary가5000이 넘는 사원들을 empAry에 저장
console.log(json);
let data = JSON.parse(json);
console.log(data);

let empAry = data.filter(function (item) {
  if (item.salary >= 5000) {// .기억하기
    return true;
  }
  return false;
})
console.log(empAry);

