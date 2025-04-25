//vairable.js
//할당연산자 p534

let num1 = "10";
num1 = num1 + "20"; //"1020"
num1 = num1 + "30"; //"102030"
console.log(num1);

num1 += "40"; //num1 = num1 + "40";

let num2 = 10; //number
num2 += 20; //30
num2 += 30; //60

num2 = num2 - 5; //55
num2 -= 5; //50

num2 = num2 * 2; //100
num2 *= 2; //200
num2 =10203040;

//비교연산자
console.log(num2 == num1); // 숫자든 문자든 똑같으면 트루라고 표시
console.log(num2 === num1); // 숫자와 문자를 구분(타입구분)

console.log(num2 != num1); //F !=not '다를때 true' 값만 비교
console.log(num2 !== num1); //T 값,타입

//논리연산자
console.clear();
console.log(num1 >= num2 || num1<100);//True or 또는
console.log(num1 >= num2 && num1<100);//T&&F=False and 그리고(둘보두 진실)
console.log(num1 >= num2 && !(num1<100));//T&&!T=T  !반대
