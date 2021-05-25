'use strict'
// primitive type은 변수하나당 하나의 값만 할당가능합니다.
const name = 'roian';
const age = 4;

// 그럼 이것을 출력하기 위한 함수를 하나 만들어보죠
print(name,age);

function print(name,age){
    console.log(name + ' ' + age);
}


// 여기서 문제는
// 하나의 함수에서 이름과 나이등을 찍어려 하면 점점더 인자가 많아질수 있다는 단점이 있습니다.
// 그래서 나온것이 object 입니다.
// 그래서

const person = {name : 'roian', age : 4};
// 이렇게 선언해 버리면 print함수에서 처럼 name, age를 따로따로 인자로 줄 필요가 없어지는 것입니다.

print2(person);

function print2(person){
    console.log(person.name + ' ' + person.age);
}

// 우리는 person이라는 object를 통해서 하나의 인자만으로 print를 할수 있었다.
// 이렇게 하면 간단히 오브젝트를 이용하여 간단히 할수 있다.

// 오브젝트를 만드는 방법은
const obj1 = {}; //const person = {name : 'roian', age : 4};
const obj2 = new Object();
const obj3 = {
    name : 'aaa',
    age : 3
}


// 자 그런데 자바스크립터는 런타임때 동적으로 자료의 타입이 결정되기때문에
// 추가적인 작업이 가능하다는 이야기다.
// 즉 위에서는 obj3는 이름과 나이만 선언했지만 나중에 직업을 추가해도
// 에러가 나오지 않는다.
// 이것은 자바스크립터가 런타임에서 자료타입이 결정되기 때문에 가능하다는 말이다.
// 나중에 추가해도 가능하다는 말이다.
// 하지만 이런식으로 코딩하면 유지보수가 어렵다.
// 또한 삭제도 가능하다.
obj3.hasJob = true;
delete obj3.age;

// 자 결론적으로 object는 key와 value의 집합체라는 것이다.
// 함수는 없다는 말이다.


//----------------------------------------
// 2. Computed properties
// 오브젝트의 멤버를 접할할 때는 두가지 접근 방식을 취할수 있다.

const person2 = {name : 'sunyee', age : 4};
console.log(person2.name)
console.log(person2['name']); //배열처럼 선언해서 가져올수 도 있다. 주의할 점은 멤버는 반드시 스트링타입으로 정의해야 된다는 것이다.
person2['hasJob'] = true; // 이렇게 재정의도 가능하다.

// 이런 person2['name'] 이런 형태는 언제 많이 사용하는냐하면
// 동적으로 키를 받아와야 될 상황이면 사용한다.
function printValue(obj, key){
    console.log('--'+ obj[key])
    return obj[key];
}
const rtn = printValue(person2,'name')
console.log(rtn);

const rtn2 = printValue(person2,'age');
console.log(rtn2);

// 자바스크립터에서 최초에 할당된 변수타입을 바꿀수가 없나
// 그래서 우리는 let을 사용한다.
// const는 상수를 정의하는 변수이다.
let rtn4 = '1111';
rtn4 = '1111111';
console.log(rtn4);

//---------------------------------
// 3. Property value shorthand
let person11 = {name : 'bob', age : 2};
let person12 = {name : 'gallen', age : 3};
let person13 = {name : 'tank', age : 4};
let person14 = makePerson('uuu',10);
person14.age = 22;

console.log(person14.namem + ' ' + person14.age);
console.log(person14);

function makePerson(name, age){
    return {
        name : name, age : age
    }
    // 간단히 이렇게도 가능하다
    // return { name, age}
}


// 4. Constructor function을 이용한 객체생성
let person15 = new Person('aaaa',10);
function Person(name , age){
    // this = {}; // 생략
    this.name = name;
    this.age = age;
    // return this; // 생략
}

// 상위처럼 makePerson을 사용하지 않고
// class 처럼 Person을 함수형태로 정의하면서 class 처럼 선언해서 오브젝트를 생성할 수도 있다.
// 그래서 이것을 contructor function이라고 한다.