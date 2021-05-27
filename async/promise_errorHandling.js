'use strict'
{

// Promise의 상태는 fulfilled 상태와 rejected 상태로 나누어진다.
// Promise는 excutor라는 콜백함수를 전달해준다.
//             executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void
//             excutor의 리턴값은 없다. executor () => void
//             excutor의 인자로 두개의 콜백함수가 전달된다.
//                             resolve: (value: any) => void, //리턴값은 없다. 인자로 어떤값이 전달한다. 
//                                                             //resolve 콜백함수의 기능은 작업이 정상적으로 수행할 경우 호출하는 함수이다.
//                             reject: (reason?: any) => void //리턴값은 없다. 인전로 어떤값을 전달할수도 있다.
//                                                             //reject 콜백함수의 기능은 작업을 수행하다가 에러가 발생하면 호출하게 되는 콜백함수이다.
// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
// Creates a new Promise.
// new <any>( 
//         executor: (
//             resolve: (value: any) => void, 
//             reject: (reason?: any) => void
//         ) => void
// ) => Promise<any>

    const getHen = () => new Promise( (resolve, reject) => {
                setTimeout( () => resolve('chicken'), 1000 );
            }
        )   

    const getEgg = hen => new Promise( (resolve, reject) => {
        setTimeout( () => { 
            resolve(`${hen} => egg`);
        }, 1000);
        }
    )

    const cook = egg => new Promise( (resolve, reject) => {
        setTimeout( () => { 
            resolve(`${egg} => fry`);
        }, 1000);
        }
    )

    // 여기서 부터 실행해 보자
    getHen()
    .then( hen   => getEgg(hen) ) //닭을 가지고 달걀을 만들어라
    .catch( error => resolve('break') ) //닭을 가지고 오다 예외를 만난 경우
    .then( egg   => cook(egg))
    .then( value => {console.log(value)} ); // 에그를 가지고 요리를 해라

        
}

console.log('------------------------------------------------------------------------------c')

{
    // Promise 클래스가 호출되면 바로 executor 콜백함수가 바로 호출된다.
    // 1. 일을 시키는 Producer를 만든다.
    let promise = new Promise( 
            (resolve, reject) => {

                // 2초이후 부터 즉 네트웍 상황을 감안해서 설정,
                // 2초이후 { } 내용이 실행된다. 여기서는 성공이라 가정하고 resolve() 콜백함수를 호출한다.
                setTimeout( ()=>{
                    const name = 'ellie'; //여기서 작업을 JDBC를 통해서 DB를 접근하든, FILE read하든지....
                    if( name === 'ellie' )
                        resolve(name); //작업된 내용을 resolve콜백함수를 통해서 데이타를 전달한다.
                    else
                        reject(new Error('wrong name')); //작업시 뭔가 장애나 잘못된 경우 reject콜백함수를 호출
                }, 2000);

                // onerror
                //reject(new Error('not found'));
            } )
    // 2. 이번에는 위에서 Producer를 통해서 일을 만들어 놓았으니 이를 이용하는 consumer를 만들어 보자
    // Consumer는 then. catch, finally를 통해서 구현한다.

    // 위에서 만든 promise가 정상적으로 잘수행이 된다면

    //then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    // 값이 정상적으로 수행이 된다면, 어떤 값을 받아올거야 여기서 인자는 value이다.
    // 그리고 우리가 원하는 기능을 수행할 것이야 {}
    // 여기서 value는 상위 Promsise의 resolve() 콜백함수에서 전달한 값을 말한다.
    promise
    .then( (value)=> {
        // 원하는 기능 수행 value는 resolve콜백함수에서 지정한 값을 받아올수 있다.
        console.log(value)
    })
    .catch( error => {
        // 여기서 error는 reject()에서 발생시킨 error를 받아온다.
        console.log(error);
    })
    .finally( () => {
        console.log('finally call')
    })

    

}



