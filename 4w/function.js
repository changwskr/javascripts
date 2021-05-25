'use strict'

function printHello() {
    console.log('Hello');
}

function log(message) {
    console.log(message);
}

printHello();
log('Hello@');

// 자바스크립터 함수처리에서 난해한 점은 
// 전달하는 인자의 타입을 정의하지 않는 다는 점이다.


// Type Script 예제
// Type Script 는 javascript와는 달리 전달하는 인자의 타입과 리턴하는 타입을 정확하게 명시해야 된다.
// 규모있는 프로젝트에서는 보다 명확한 점이 있다.
//
// function log(message : String) : number {
//     console.log(message);
//     return 0;
// }


//------------------------------------------------------------------------------------
// 2. 함수인자 전달값
// 함수에서 인자는 primitive type인 경우는 pass by value값으로 전달되며
//                object type인 경우는 pass by referencer값으로 전달된다.

function changeName(obj) {
    obj.name = 'roian';
    obj.juso = '경기도 남양주시 다산순화로 300 반도유보라';
    obj.age = 51;
}
const oellie = {
    name : 'ellie'
}
changeName(oellie);
console.log(oellie.name);
console.log(oellie.juso);
console.log(oellie.age)


//------------------------------------------------------------------------------------
// 3. Default parameter (added in ES6)
function showMessage(message, from){
    if( from === undefined){
        from = 'unknown'
    }
    console.log(`${message} by ${from}`);
}

// 위에서 보이는 unkown 부분을 함수인자에서 초기화 한다.
// 만약 from이 있으면 전달되는 인자값으로 하고 없다면 unknown으로 초기화 한다는 의미이다.
function showMessageBE(message, from = 'unkown'){    
    console.log(`${message} by ${from}`);
}

showMessage('Hi !');
showMessage('Hi !','roian');

showMessageBE('Hi !');
showMessageBE('Hi !','roian');

//------------------------------------------------------------------------------------
// 4. Rest parameter (added in ES6)
// 하위처럼 ...으로 세개로 작성하게 되면 이것을 rest parameter이라고 부르고
// 전달형태는 배열이다.
// 여기서 중요한 사실은 ...으로 선언해야 이게 배열형 인자라는 것을 알게된다는 것이다.

function printAll(...args){ 
    for(let ii = 0; ii < args.length ; ii++){
        console.log(args[ii])
    }
}

function printAllBE(...args){ 
    for(const arg of args){  // 이런 형태로도 사용가능 하다. 즉 모든 args의 배열인자값을 arg에 할당한다.
        console.log(arg)
    }
}

function printAllCE(...args){ 
    args.forEach((arg) => console.log(arg)); // 이런 형태로도 사용가능 하다. 배열의 기능을 이용하여 arg에 할당한다.
}

printAll('dream', 'coding');
printAll('----------------------------------');
printAll('dream', 'coding', 'ellie');
printAll('----------------------------------');
printAll('dream', 'coding', 'ellie', 'aaaaa');
printAll('----------------------------------2222');
printAllBE('dream', 'coding', 'ellie', 'aaaaa');
printAllCE('dream', 'coding', 'ellie', 'aaaaa');


// 자스크크립터에서 함수들은 일정의 object 타입이다.
printAll.log