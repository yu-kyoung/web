// object1.js
// 객체지향(자바)+함수:컴파일, 함수기반(자바스크립트)+객체:인터프리터

//this => 1.객체 안에서의this (객체를 가리킴)
//        2.함수              (window 객체를 가리킴)
//        3. 이벤트 (대상)

function sum(){
  console.log(this);
}
//호출
sum();

// 객체 : this 자기자신
let ojb = {
  name:"홍길동",
  age:20,
  showName:function(){
    console.log(this);
    return`이름은 ${this.name}입니다.`
  },
  setName(name){//setName: function(name){  줄일수 있음,
    this.name = name;
  }
}
//호출
ojb.setName("김길동")
let result=ojb.showName();
console.log(result);


//class 생성
class Person{
  //name, age:속성
  //showName(), setName() : 메소드
  constructor(name, age){//생성자
    this.name=name;
    this.age=age;
  }
  //메소드
  showName(){
    return `이름은 ${this.name}입니다.`
  }
  setName(name){
    this.name= name;
  }
  showAge(){
    return `나이는 ${this.age}입니다.`
  }
  setAge(age){
    this.age=age;
  }
}
let choi = new Person("최문식", 22); //인스턴스 생성
choi.setName("최민수");
choi.setAge(50);
console.log(choi.showName());
console.log(choi.showAge());
let park= new Person("박충식",30);//인스턴스 생성

