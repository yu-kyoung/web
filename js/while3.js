// while3.js
//친구이름 입력 .=>quit 종료.


//화면요소 삭제 함수
function removeElement(parameter1){
  console.dir(parameter1.target.parentElement.parentElement);
  parameter1.target.parentElement.parentElement.remove(); //제거
}


// document.write('<table class="table">');
// document.write("<tbody>");
// while (true) {
//   document.write("<tr>");
//   text = prompt("이름을 입력");
//   if (text === "quit") {
//     break;
//   }
//   document.write(`<td>${text}</td>`);
//   document.write(`<td><button>삭제</button></td>`);

//   document.write("</tr>");
// }
// document.write("</tbody>");
// document.write("</table>");


let str=""
let running=true;
str += "<table class='table table-striped'>";
str += "<tbody>";
while(running){
  let userValue = prompt("이름입력");
  if(userValue == "quit"){
    running=false;
    continue;  //컨티뉴 아래쪽 코드 실행 안하고 처음으로 돌아감
  }
  str +=`<tr><td>${userValue}</td><td><button onClick="removeElement(event)" class='btn btn-danger'>삭제</button></td></tr>`;
}
str +=`</tbody></table>`;
document.write(str);