//-----------------------------------------------------------
// 1. String concatenation
console.log('my' + 'cat'); // 문자열끼리 연결
console.log('1' + 2); //  문자 와 숫자타입 연결
console.log(`string literals: 1 + 2 = ${ 1+ 2 }`);

//-----------------------------------------------------------
// 2. Numberic operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//-----------------------------------------------------------
// 3. Increment and decrement operatoss
let count = 2;
const preIncrement = ++count;
{
    // 이 코드와 동일
    let count = 2;
    count = count + 1; // count=3
    const preIncrement = count; // preIncrement = 3
}

const postIncrement = count++;
{
    // 이 코드와 동일
    let count = 2;
    const postIncrement = count;
    count = count + 1; // count=3, postIncrement = 2, 
}

//-----------------------------------------------------------
// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y;
x /= y;


//-----------------------------------------------------------
// 5. Comparison opertors
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6 );
console.log(10 >= 6);

//-----------------------------------------------------------
// 6. Logical operators
// or - ||
// and - &&
// ! - not
const value1 = true;
const value2 = 4 < 2 ;

// or - 이 연산의 특징은 조건중 하나라도 true가 나오면 나머진 수행하지 않고 나온다.

console.log(`or : ${value1 || value2 || check()}`) // 여기서는 value1을 수행되면 나머진 수행되지 않는다.

console.log(`and :  ${value1 && value2 && check()}`)

function check() {
    for(let i = 0; i < 10; i++) {
        console.log('o');
    }
    return true;
}

//-----------------------------------------------------------
// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == 의 연산으로 검산하면 loose equality로 두개의 타입을 검산한다.
console.log("--------------eauality")
console.log(stringFive == numberFive); // 타입이 틀리지만 같은 값을 가지고 있다 그래서 true
console.log(stringFive != numberFive); // false

// ===의 연산은 타입이 틀리면 틀리다고 하는 것이다.
console.log(stringFive === numberFive); // 타입이 틀리고 같은 값을 가지고 있다 그래서 false
console.log(stringFive !== numberFive); // true


// object eauality by refername
const ellie1 = {
    name : 'ellie1'
}
const ellie2 = {
    name : 'ellie2'
}
const ellie3 = ellie1;

console.log("--------------eauality--object")
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// test
console.log("--------------test")
console.log(0 == false); //true
console.log(0 === false);  //false O운 숫자, flase은 boolean이다 그래서 엄격히 틀리다.
console.log('' == false); //ture 
console.log('' === false); //false  ''은 boolean타입이 아니다. 그래서 false
console.log(null == undefined); //true
console.log(null === undefined); //false , null 과 undefined는 다른 타입이다.

//-----------------------------------------------------------
// 8. Conditional operations : if
const name = 'roian';
if (name === 'roian') {
    console.log('welcome ' + name);
} else if (name === 'corder') {
    console.log('You ar amazing coder');
} else {
    console.log('unkown');
}


//-----------------------------------------------------------
// 9. Ternary operator :
// if 조건을 간단히 사용하는 것
// condition ? values1 : value2
const name1 = 'roian';
let lternary = ( name1 === 'roian' ? 'yes' : 'no');
console.log(lternary);


//-----------------------------------------------------------
// 10. switch operator :
const browser = 'IE';
switch(browser){
    case 'IE' :
        console.log('go away');
        break;
    case 'Chrom' :
        console.log('love yoy');
        break;
    case 'Firefox' :
        console.log('love you');
        break;
    default :
        console.log('sam all');
        break;
}

//-----------------------------------------------------------
// while Loops

// 조건문이 맞을때만 실행하고 싶다면 while을 사용한다.
let i = 3;
while( i > 0) {
    console.log(i);
    i--;
}

// 우리가 { } 블럭을 먼저 실행하고 싶다면 do - while을 사용해야 된다.

let ii = 3;
do {
    console.log('--' + ii);
    ii--;
} while(ii > 0);

//-----------------------------------------------------------
// for
for(let jj = 1;jj < 10; jj++ )
    console.log('===' + jj);

let vk;
for(let kk = 0;kk <= 10; kk++ ){
    vk = ( (kk % 2 === 1) ? kk : console.log('---' + kk) )
    if ( vk === undefined) 
        continue;
}
    