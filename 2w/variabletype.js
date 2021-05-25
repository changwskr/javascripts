
'use strict';


// ================================================================
// 1. number type
// variable type
// 1. primitive,
// 2. single item : number, string, boolean, null, undefined symbol
// 3. object - single item 들을 박스로 관리해 준다.
//    object, box container
// 그리고 자바스크립터에서는 function도 데이타 타입의 한종류이다.
// 이 말은 function도 다른 데이타타입처럼 값을 할당하는 것이 가능하다는 말이다.
// 또 function은 함수의 인자로도 전달이 가능하다.
// 함수의 인자로 전달가능하다는 것인 함수의 리턴타입으로도 전달이 가능하다는 말이다.
// function의 이른 기능들을 한마디로 first-class function이라고 한다.


// c 언어에서는 타입정의만으로도 해당 데이타의 메모리사이즈가 정의된다.
// 만약 우리가 변수를 쓰는데 한반의 학생수를 long으로 선언한다면
// 쓸때없는 메모리를 낭비하게 된다는 말이다.

// int main(){
//     short a = 12; //2바이트
//     int a=13;   //4바이트
//     long a=14;  //8바이트   
//     float a=15;  //4바이트
//     double a=16;  //16바이트

//     console.log(a);
//     return 0;
// }

// java 언어에서도
// 우리가 사용하고자 하는 데이타의 크기에 관련된 타입선언을 생각하면서 정의해야 된다.
// class Main {
//     public static void main(String[] agrs){
//         byte a = 12;
//         short a = 12;
//         long a = 12;
//         int a = 12;
//         float a = 1.2f;
//         double a = 12;
//     }
// }

// 하지만 javascript는 이 모든것을 number 변수타입 하나이면 충분하다.

let ab1 = 13;
// 즉 자바스크립터에서는 c언어나 java언어에서 처럼 메모리의 크기를 생각하면서 할핑요가 없다는 말이다.
// 그리고 심지어 number라고 선언도 하지 않아도 된다.
let a = 1;
let b = 1.2;
// 이것처럼 자바스크립터에서는 타입이 다이나믹하게 적용된다.
// 그런데 이렇게 선언해도 이 타입이 number라는 것을 명시해된다.
// 그래서
let a1 = 12;
let b1 = 1.2;
// 이렇게 사용해야 된다는 말이다.

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// 특별한 number 타입
const infinity = 1 / 0;  // 긍정적인 값을 0으로 나누면 양의 무한대
const negativeInfinity = -1 / 0 // 부정적인 값을 0으로 나누면 음의 무한대
const nAn = 'not a number' / 2 // 숫자가 아닌 값을 나누면

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// big INT 
// 자바스크립터에서 numer는 -2**53 승부터 ~ 2**53승까지 표현가능하다.
// 그런데 최근에 bitInt라는 타입을 신규로 만들어졌다.

const bitInt = 1234567890123456789012345678901234567890n
// n을 붙여야 된다.
// 현재 지원은 크롬에서만 지원된다.
console.log(`value: ${bitInt}, type: ${typeof bitInt}`);


// ================================================================
// 2. string 타입
// 자바스크럽터에서 문자는 한문자이든 여러개문자이든 다 ' '으로 문자열로 간중한다.
const char = 'c';
const brenadon = 'brendan';
const greeting = 'hello' + brenadon;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value ${brenadon}, typeof: ${typeof brenadon}`);

const helloBob = `hi, ${brenadon}!` //template literals(string)
console.log(`value: ${helloBob}`);

// 문자열을 서로 붙여야 될때
// + 를 이용하여 문자열을 작업할수도 있고, `` 을 이용하여 문자열을 붙일수도 있다.


// ================================================================
// 3. boolean 타입
// false로 간주되는 값 : 0, null, undefined, NaN, ''
// trud로 간주되는 값 : any other value , 어떤 값이라도 있으면 참이다.
const canRead = true; // true
const test = 3 > 5; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// ================================================================
// 4. null
// null 이라는 의미는 어떤 객체에 값이 텅텅비어 있다는 의미이다.
// 즉 실체화 되었지만 아직 값이 정의되지 않은 단계이다.
let nothing = null;
console.log(`value: ${nothing}, typeof: ${typeof nothing}`);

nothing = 1;
console.log(`value: ${nothing}, typeof: ${typeof nothing}`);

nothing = 'aaaa';
console.log(`value: ${nothing}, typeof: ${typeof nothing}`);

// ================================================================
// 5. undefined
// undefined라는 말은 이직 메모리에 객체가 실행되지 않은 상태를 말한다.
let x = undefined; // let x; 라고 선언해도 같은의미이다.
console.log(`value: ${x}, typeof : ${typeof x}`);

x=1
console.log(`value: ${x}, typeof : ${typeof x}`);

// ================================================================
// 6. symbol
// symbol은 map이나 다른 자료구조에서 고유한 식별자가 필요할때 사용된다.
// 또 동시환경에서 고유한 식별자를 정해야 될 경우 사용된다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(`symbol1-value:${symbol1.description}, symbol2-value:${symbol2.description},${symbol1 === symbol2}`)

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)


// ================================================================
// 5. Dynamic typing : dynamically typed language
// 자바스크립터 언어는 변수를 선언적으로 정의해서 사용하는 언어가 아닌
// 필요시 할당되는 타입에 의해서 실행되는 언어라는 말이다.
// 이것으로 강력할수도 있지만 대규모 프로젝트에서는 또다른 어려움이 될수도 있다는 말이다.
// 결론적으로 자바스크립터는 runtime환경에서 변수의 타입이 정해진다.

let text = 'hello' // 문자
console.log(`value1: ${text}, type:${typeof text}`);

text = 1; //  숫자
console.log(`value2: ${text}, type:${typeof text}`);

text = '7' + 5; // 문자
console.log(`value3: ${text}, type:${typeof text}`);

text = '8' / '2'; // 숫자
console.log(`value4: ${text}, type:${typeof text}`);

let text2 = 'hello' // 문자
console.log(`text2.charAt(0)-val: ${text2.charAt(0)}, type:${typeof text2}`);


// ================================================================
// object
// pellie -> object ref - name -> ellie
//                      - age  -> 20

const pellie = {
    name : 'elllie',
    age : 20
}
pellie.name = 'roian';
pellie.age = 20;
console.log(pellie.name)


// 참고로 let과 const의 차이는
// let 변수를 read write 가능하지만 
// const는 read 만 가능하다는 것이다.
// 그래서 변수선언시 이 값이 바뀌지 않는다면 const로 선언해서 사용하는 것이 좋다.

// 그리고 primitype 변수의 메모리저장과  object 타입의 메모리 저장방식은 틀리다.
// 즉 primitive는 직접 메모리에 저정하지만
// object는 내용이 크므로 참조에 참조로해서 저장이 된다. c에서의 포인터를 생각하면 되겠다.



