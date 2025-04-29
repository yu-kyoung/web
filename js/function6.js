// function6.js
// 배열 +object★(객체)

let num = 10;
let obj = {
  name: "홍길동",
  age: 20,
  phone: "010-000-0000",
  pets: [{
    name: "야옹이",
    age: 2,
    검진일:['2025-01-04','2025-04-03']
  },{
    name:"멍멍이",
    age: 5,
    검진일:['2025-05-05']
  }]
}; // new Object();

console.log(obj.pets[1].검진일[0]);

//배열 + object
let friends=[
  {name:"홍길동",age:20,phone:"010-9987-8476"},
  {name:"김민식",age:21,phone:"010-9987-3333"},
  {name:"이영동",age:22,phone:"010-9987-2222"}
];
let max=0;
// for(let i=0; i<friends.length; i++){
//   if(friends[i].name =="홍길동"){
//   console.log(friends[i].age);
//   }
// }
for(let i=0; i<friends.length; i++){
  if(friends[i].age>max){
    max=friends[i].age;
  }
}
console.log(max);
