'use strict'

// 자바스크립터는 동기적인 언어이다.
// hoisting : var, function의 선언이 자동적으로 상단으로 올라가는 것을 말한다.

// 다음과 같이 호출하면 하나씩 위에서 부터 실행이 된다.
console.log('1');
console.log('2');
console.log('3');
console.log('------------------------')
// 그런데 비동기식 호출은 하나씩 위에서 부터 실행이 되지 않는다.
console.log('4');
setTimeout(function(){
    console.log('5');
},1000); // setTimeout() 함수는 특정시간이후 해당하는 함수를 호출해주는 역할을 한다.

console.log('6');

setTimeout( ()=>console.log('2번째 call'), 1000);


// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately( ()=> console.log('right now hello'));

// Asynchroous callback
function printWithDelay(print, time){
    setTimeout(print,time);
}

printWithDelay(()=> console.log('delay call hello'),1000);
