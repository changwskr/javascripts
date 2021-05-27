

// 2. await
// await 키워드는  async가 붙은 함수에서만 사용한다.

function delayCall(second){
    // Promise는 resolve라는 콜백함수를 일정시간이후 호출해준다.
    return new Promise( (resolve, reject) =>{
        setTimeout(resolve, second);
    })
}

function delayCallFunction2(second){
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=>{console.log('aaaaa')} , second);
    })
}


// 우리는 async 키워드를 사용하게 되면 Promise화 시킨다.
async function getApple() {
    await delayCall(1000);
    return 'apple'
}

async function getAppleError() {
    await delayCall(1000);

    // 에러를 던지는 로직을 강제화 시킨다.
    throw 'getApple() error 발생';

    return 'apple'
}

async function getBanana() {
    await delayCall(2000);
    return 'banana';
}

function getBananaPromise() {
    return delayCall(300).then( ()=>'banana' );
}

function pickFruits() {
    return getApple().then( 
        (apple)=>{ 
           return getBanana().then(
                (banana) => {      // 이렇게 {}묶어주면 return을 넣어준다. 당연히
                    return `${apple} + ${banana}`
                }
            )
        }
    )
}

function other_pickFruits() {
    return getApple().then( 
        (apple)=>{ 
           return getBanana().then(
                (banana) => `${apple} + ${banana}`  // 이렇게 한줄이면 return을 명시하지 않아도 이값을 리턴한다.              
            )
        }
    )
}


function simple_pickFruits() {
    return getApple().then( 
        (apple)=> {
            return getBanana().then( banana => `${apple} + ${banana}` );
        }
    )            
}

async function await_pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}

// await_pickFruits()의 문제는 멀티동시 처리가 불가능하다.
// 그래서 Promise의 기능을 이용하여 즉 Promise가 호출되면 바로 실행되는 점
// 을 이용한 멀티처리를 해본다.
async function multi_await_pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();

    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}

// 이런 병렬처리는 너무 복잡하기 때문에
// Promise에서 제공하는 동시처리 API가 존재한다.
function multi_pickAllFruits(){
    // Promise.all 함수가 호출되면 넣은 인자의 함수를 다실행하고 난이후 각 실행된 값을
    // 배열로 전달한다. 
    // 그리고 여기서는 배열속의 인자값을 서로 연결해주는 jon() 함수를 이용했다.
    return Promise.all( [getApple(), getBanana()] )
    .then( fruits => fruits.join(',') );
}


// 에러처리를 위한 예제
// getAppleError() 함수내에 throw 가 존재한다.
async function await_pickFruits_error(){
    let apple='nothing', banana ='nothing';
    try{
        apple = await getAppleError();
        banana = await getBanana();    
    }
    catch(e){
        console.log(e);
    }
    return `${apple} + ${banana}`
}

// 작업중 제일 먼저 끝난 작업에 대한 값을 가지고오고 싶다는 경우
function pickOnlyOne(){
    return Promise.race( [getApple(), getBanana()] );
}


const vtn = getBananaPromise();
console.log(vtn.then((value)=>{console.log(value)}));


const vtn2 = getBanana();
console.log(vtn2.then((value)=>{console.log(value)}));

simple_pickFruits().then( console.log );

pickFruits().then( console.log );

await_pickFruits().then( console.log );
multi_await_pickFruits().then( console.log );

await_pickFruits_error().then( console.log );

multi_pickAllFruits().then( console.log );

pickOnlyOne().then( console.log );
