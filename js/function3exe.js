// function3exe.js
//1. max(10, 7) => "두 수중 큰값은 10입니다."
//2.sumUpTo(7) => 1부터 7까지의 합은22입니다.
//diff (34,17) "두수의 차는 17입니다.""


// function max(num1, num2){
//  if(num1==num2){
//   console.log(`2개의 수는 ${num1}으로 같습니다.`)
//  } else if(num1>num2){
//   console.log(`2개의 수 중 큰 값은 ${num1}입니다.`)
//  } else if(num1<num2){
//   console.log(`2개의 수 중 큰 값은 ${num2}입니다.`)
//  }
// }

// let sum=0;
// function sumUpTo(num3){
//   for (let i = 1; i <= num3; i++){
//     sum += i;
//   }
//   console.log(sum);
// }

// let result1, result2=0;
// function diff(num4,num5){
//   if(num4>num5){
    
//   }
// }


function max(num1, num2){
  if(num1==num2){
    document.write(`<p>두 수는 ${num1}으로 같습니다.</p>`)
  }else if(num1>num2){
    document.write(`<p>두 수중 큰값은 ${num1}입니다.</p>`)
  }else if(num1<num2){
    document.write(`<p>두 수중 큰값은 ${num2}입니다.</p>`)
  }
}

function sumUpTo(num3){
  let sum=0
  for(let i=1; i<=num3; i++){
    sum += i;
  }
  document.write(`<p>1부터 ${num3}까지의 합은 ${sum}입니다.</p>`)
}

function diff(num4, num5){
  if(num4==num5){
    document.write(`<p>두 수의 차는 0입니다.</p>`)
  }
  if(num4>num5){
    document.write(`<p>두 수의 차는 ${num4-num5}입니다.</p>`)
  }if(num5>num4){
    document.write(`<p>두 수의 차는 ${num5-num4}입니다.</p>`)
  }
}


max(50, 30)

sumUpTo(10)

diff(70,50)
