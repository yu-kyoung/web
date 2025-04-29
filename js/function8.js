// function8.js
console.log(json); //문자열
let data = JSON.parse(json); //json-> 객체 변환
console.log(data); //객체(오브젝트)배열

console.clear(); //로그지우기

// for(let emp of data){
//     console.log(emp);
// }


let fields = ['id', 'first_name', 'gender', 'salary'];

//사원목록(table) 출력
let elist = "<table class='table'>";
elist += "<thead>";
for (let field of fields) {
  elist += `<th>${field}</th>`
}
elist += "</tr></thead><tbody>"

for (let emp of data) { //let(let i=0; i <data.length; i++)
  // console.log(emp);
  elist += makeTr(emp);
}

elist += "</tbody></table>"
document.write(elist);



//////////////////////////
//이벤트
document.querySelector('button#searchBtn').addEventListener('click', function () {
  //입력값
  let searchValue = document.querySelector('#userValue').value; //value 가 all female male
  let list = "";
  for (let emp of data) { //let(let emp=0; emp<data.length; emp++)
    if (searchValue == 'All' || searchValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
  //tbody에 출력
});



document.querySelector('select#selectGender').addEventListener('change', function () {
  let select = document.querySelector('#selectGender').value;//오타 조심ㅠㅠ

  let list = "";
  for (let emp of data) {
    if (select == 'All') {
      list += makeTr(emp);
    } else if (select == 'Male' && emp.gender == 'Male') {
      list += makeTr(emp);
    } else if (select == 'Female' && emp.gender == 'Female') {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = list;
});



//tr을 생성하는 함수       함수안에서 선언된 변수는 함수 안에서만 사용가능
// function makeTr(emp = {}) {

function makeTr(emp = {}) {
  //속성을 정의
  let str = "<tr>";

  for (let field of fields) {
    // console.log(emp[field]);
    str += `<td>${emp[field]}</td>`

  } // emp[id]==emp.id
  str +=`<td><button id="deleteTr">삭제</button></td>`  //이것만 지우면
  str += "</tr>";
  return str;
}

// function deleteTr() 


console.log(makeTr({
  id: 12,
  first_name: "kildong",
  email: "kildong@email.com"
}));