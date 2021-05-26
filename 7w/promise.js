// 자바스크립터에서 비동기를 간편하게 해주는 방법
// 비동기적인 메소드 없이 처리하는 방법이다.

'use strict';

// Promise is a Javascript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// producer vs Consumer

// 1.producer
// Promise 클래스가 만들어짐과 동시에 executor 함수가 바로 실행된다
let promise = new Promise( (resolve, reject) => {
    // doing some heavy work( network, read file )
    console.log('doing something....', resolve, reject)
} );

promise = new Promise( (resolve, reject) => {
    // doing some heavy work( network, read file )
    console.log('doing something....', resolve, reject);
    setTimeout( ()=>{
        // do work 네트웍을 통해서 id를 얻어오는 작업등을 실행
        // do ...
        const id='';
        // const id ='1111'
        if( id )
            resolve(id);
        else
            reject( new Error('no network'))
    }, 2000 );
} );

// 2.consumer
// then은 promise가 정상적으로 수행되면 value에 정상적인 값이 저장된다.
promise.then(   (value)=>{
                    console.log(value,1)
                },
                (value)=>{
                    console.log(value,2)
                } 
);

promise.then(   (value)=>{
                    console.log(value,1)
                },
                (value)=>{
                    console.log(value,2)
                } 
).catch(error => {
    console.log(error);
}
).finally(()=>{
    console.log('uuuuuu')
});


// 3.Promise chaining
console.log('-------------------------')

let fetchNumer = new Promise( (resolve, reject) => {
    // receive num

    setTimeout( ()=>{
        const num = 1;
        if(num)
            resolve(1);
        else
            resject(new Error('error'));
    
    },3000);

});

fetchNumer
.then( (num)=> num * 2 )
.then( (num)=> num * 3 )
.then( (num) => {
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=> {resolve(num-1);}, 3000)        
    })})
.then(num=> console.log(num))


