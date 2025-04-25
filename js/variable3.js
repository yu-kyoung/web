//variable.js
//연산자(+ - / * %-나머지)

let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;//대소문자 구분 철저히
num1=parseInt(num1); //"30"문자열을 30 숫자로 바꿈
num2=parseInt(num2);
num1++;
num1++;
num1++;

let result = num1++ + --num2;
 //30+17을 더하면 47이지만 "20"+"17"="2017"문자열로 나온다
console.log(result, num1, num2);//뒤에 ++을 붙이면 연산후 +1시킴
console.log(result);

//result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value=result;