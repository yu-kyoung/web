// for4.js

document.write("<h3>구구단</h3>");

//<p> 3*1=3</p> 로 출력
//<table><tbody><tr><td>
let str = "";
str += "<table class='table table-striped'>";
str += "<tbody>";
// let m = p;
for (let n = 1; n <= 9; n++) {
  str += "<tr>";
  for (let p = 2; p <= 9; p++) {
    str += `<td>${p}  X  ${n} =  ${p*n}</td>`;

  } //end of for
  str += "</tr>";
} //end of for
str += "</tbody>";
str += "</table>";
document.write(str);