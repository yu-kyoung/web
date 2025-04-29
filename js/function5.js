// function5.js

let names = ["홍길동", "박춘식", "김민수", "이영식"];
let i = 0;
let exists = false; //존재여부확인
let search = prompt("검색할 이름을 입력");
while (true) {
  if (i == names.length) {
    break;
  }
  if (search == names[i++]) {
    exists = true;
    break;
  }
}
if (exists) {
  alert('있음');
} else {
  alert('없음');
}

// for(let i=0; i<names.length; i++){
//   if(names[i]==search){
//     alert('있음');
//     break;
//   }else{
//     alert('없음');
//     break;
//   }
// }