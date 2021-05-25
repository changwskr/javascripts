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

