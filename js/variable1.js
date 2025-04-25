//variable1.js
// JS 주석
/* 
주석 486p-489p 읽기.
*/
//beautify 확장설치  바로가기키 설절 beautify seletion 컨+쉬+f
/*
데이터베이스 관리 시스템(DBMS) - 오라클.
정보 -> frontend -> backend -> oracle
변수(variable) - 데이터타입(문자, 숫자, boolean, object, 배열)
*/
let name; //변수선언
name = "이창호"; //값을 대입    중복된 변수는 선언 할수 x
let name1 = "홍길동" //변수 초기화

name = "김민수"
console.log(name);

const age = 20; //변수선언 & 초기화  상수
// age = 30; // 30 할당

//선택자(selector)
let item = document.querySelector('#userValue');
console.log(item);

name = item.value; //변수 할당
console.log(name);