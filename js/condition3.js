//condition3.js
//30~100 사이의 점수.
let result = 30 + Math.floor(Math.random() * 71); //30 <= x < 71
console.log(result);
// if(result >= 60){
//   console.log("Pass");
// }else{
//   console.log("Fail");
// }

//100~90=A ~80=B ~70=C ~60=D  그외 F 점수
if (result >= 90) {
  console.log("A");
} else if (result >= 80) {
  console.log("B");
} else if (result >= 70) {
  console.log("C");
} else if (result >= 60) {
  console.log("D");
} else {
  console.log("F");
}