// 1. async
// 자바스크립터에서는 동기적으로 코드를 진행하기 때문에 
// 모든 처리는 한줄한줄 진행할 것이다.
// 그럼 우리는 한줄한줄 진행을 작업시간에 구애받지 않고 진행할수 있는 방법은 없을까
// 
// 이것을 해결하기 위해 나온 것이 async이다.

function fetchUser() {
    // do something from network
    // and then return
    return 'ellie';
}

const user = fetchUser(); // 만약 여기서 10초간 대기하고 있다면 어떻게 할까
console.log(user);


// 우리는 Promise 를 통해서 선작업을 해놓고
// 나중에 필요시 이것을 사용할수 있는 구조로 하면 된다. 즉 then만 호출하면 된다.
// fetchName 함수에서 Promise를 리턴하고, 이 리턴된 promise를 통해서 then을 통해
// 원하는 값을 가지고 온다.
function fetchName() {
    return new Promise( (resolve,reject)=>{
        resolve('roian')
    });    
}

const name = fetchName(); 
name.then( (value)=>{
    console.log(value);
}
)

// 자, 그럼 우리는 이렇게 복잡하게 Promise에 작업내용을 등록해서 사용하면 복합하다.
// 그래서 나온것이 async 이다.
// 다시말해서 async가 Promise의 기능을 대체한 것이라 보면 된다.
async function fetchSomething() {
    return 'something';
}

const some = fetchSomething(); 
some.then( (value)=>{
    console.log(value);
}
)

// 2. await
// await 키워드는  async가 붙은 함수에서만 사용한다.

console.log('--------------------');

function delayCallFunction(second){
    // Promise는 resolve라는 콜백함수를 일정시간이후 호출해준다.
    return new Promise( (resolve, reject) =>{
        setTimeout(resolve,second);
    })
}

function delayCallFunction2(second){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{console.log('aaaaa')} , second);
    })
}

const dc1 = delayCallFunction(10);
const dc2 = delayCallFunction2(10);







