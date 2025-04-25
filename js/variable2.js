//varible2.js
let num1 = 100; //int num1;(반드시 정수)
console.log(typeof num1)
num1 = "hundred";

let num_2 = 200; //변수 이름 - 맨앞자리 영문으로; 될 수 있으면 소문자;
let nameOfFriend = "홍길동";

let birthOfDate = new Date(); // 대소문자가 구분됨 ex)O vs o 단어 첫 글짜 대문자
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; //false
isOK = 10 > 5;

if (isOK) {
  //isOK 값이 true 일 경우 {} 블럭을 실행.
  console.log('isOK는 참입니다.')
}

//배열: [100,200,250]  여러개의 값을 저장
let numAry = [10, 20, 15, 31]; // 인덱스는 0 부터 시작
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300]; //문자 숫자 섞을수 있지만 않쓰는게 좋음2025.04.25
console.log(strAry[2]);

//객체(오브젝트)
let person = {
  name: "홍길동",
  age: 20,
  height: 162.8,
  weight: 65.4,
  personInfo: function(){   //함수는 기능
    console.log('이름은 ' + person.name + '이고 나이는' + person.age);
  }
}; //객체는 {} 키: 값의 형태 
person.personInfo(); //메소드 호출(call) , 출력


console.log(person.name);// . 은 속성 선택할수 있음

//undefied, null
let whatIsThis;//값이 없음
whatIsThis = document.querySelector('#userValu');
console.log(whatIsThis);
console.log(typeof whatIsThis);//'null'의 타입이 오브젝트
