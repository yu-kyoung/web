//condition5.js
//switch..case 문 p533
// let num1 = prompt("숫자를 입력하세요.ex: 1, 2, 3");

// switch (num1) {
//   case "1":
//     console.log("1을 선택했습니다.");
//     break;
//   case "2":
//     console.log("2을 선택했습니다.");
//     break;
//   case "3":
//     console.log("3을 선택했습니다.");
//     break;
//   default:
//     console.log("1,2,3중에 선택하세요")
// }
//범위 지정 안됨, 일정 값만 출력

//30~100 임의의 값
let result = 30 + Math.floor(Math.random() * 71); //30 <= x < 71
console.log(result);

result = Math.floor(result / 10); //95/10=9.5
switch (result) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}