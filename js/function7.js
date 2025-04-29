// function7
console.log(friends);

//함수 : makeRow(friend={}) 

let friend={
  name:"김민규",
  age: 20,
  phone: " 010-3545-2222"
}
// let a1={
//   name:"김민규",
//   age: 20,
//   phone: " 010-3545-2222"
// }
// console.log(a1)


// for..in 객체(오브젝트)의 속성만큼 반복
for (let prop in friend){
  console.log(`prop :${prop},val: ${friend[prop]}`)
}

function makeRow(friend={name,age,phone}){
  let str= "";
  str += "<tr>";
  // str += `<td>${friend.name}</td><td>${friend.age}</td><td>${friend.phone}</td>`
  // for..in 객체의 속성만큼 반복
  for(let a in friend) {
    str += `<td>${friend[a]}</td>`;
  }
  str += "</tr>";
  return str;
}

//출력
let titles=["이름","나이","연락처"]


let tlist="";
tlist += "<table class='table'>"
tlist += "<thead><tr>"

// for(let b in titles){
//   tlist += `<th>${titles[b]}</th>`
// }
for (let b of titles){
  tlist += `<th>${b}</th>`
}

tlist += "</tr></thead>"
tlist += "<tbody>"
//데이터 생성->row 생성
// for (i=0; i< friends.length; i++){
// tlist += makeRow(friends[i]);}

//배열을 대상으로 반복
  for(let friend of friends){
    tlist+= makeRow(friend);
}
  
tlist +="</table></tbody>"
document.write(tlist);
