// dom1.js

// createElement(), appendChild(), setAttribute(), querySelector()
// li span 공백 span 


//등록버튼 이벤트생성
document.querySelector('#addBtn').addEventListener('click', addCallBack);


document.querySelectorAll('ul button').forEach(function (item) {
  console.log(item);
  item.addEventListener('click', function () {
    item.parentElement.remove();
  }) //html 삭제 버튼 이벤트
});

//li에 스타일 적용
document.querySelectorAll('li').forEach(item => {
  console.log(item);
  item.addEventListener('mouseover', function () {
    item.style.backgroundColor = "red";
  })
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";

  })
})


function addCallBack() {
  let fruit = document.getElementById('fruit').value;
  let price = document.getElementById('price').value; //querySelector('#')dlfkd rkxdma


  //삭제버튼 모두 콜

  //입력값이 있는지 체크
  if (fruit == "" || !price) {
    alert('값을 입력하세요')
    return; //함수 실행 종료
  }


  let newList = createLi(fruit, price); //에게 전달

  document.querySelector('ul').appendChild(newList); //부모 - 자식 관계 지정

  //입력값 초기화
  document.getElementById('fruit').value = "";
  document.getElementById('price').value = 0;
}

///////////////////////////////////////////////////////////////
function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li"); //<li> 여기있음
  // li.innerText = "test";
  let sp1 = document.createElement("span");
  sp1.innerText = fruitName;
  let sp2 = document.createElement("span");
  sp2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");
  //삭제버튼 만들기
  let btn = document.createElement("button"); // <button id="delBtn" class="btn btn-danger">삭제</button>
  btn.innerHTML = "삭제";

  // btn.setAttribute('class','btn btn-danger');
  btn.className = "btn btn-danger" //클래스 만 

  btn.addEventListener('click', function () {
    btn.parentElement.remove();
  }); //li 클릭 삭제 이벤트

  li.appendChild(sp1); //li의 자식요소로 넣겠음. 순서중요
  li.appendChild(txt);
  li.appendChild(sp2);
  li.appendChild(btn);

  //과제 함수 <li>에 마우스 오버 (내가 만든거... 좀 이상한가?)
  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = "pink";
  });
  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = ""; 
  });
  
  return li;
  
} //end of createLi


//다른 등록 리스트도 마우스 오버 이벤트
//19장 실습