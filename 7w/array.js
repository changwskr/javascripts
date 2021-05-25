// 오브젝트와 배열의 차이점은
// 메소드가 있다.--오브젝트의 특성
// 동일한 타입의 자료만 담을수 있다. 그런데 자바스크립터는 동적인 언어여서 다른타입의 자료도 담는것이 가능하다.
// 그런데 이런식으로 개발하는 것은 당연히 안되겠죠
// 배열에는 원칙적으로 같은타입의 자료만 담는 것으로 하느는 것이 좋다.
// 검색 정렬 삽입 삭제
// [ ] [ ] [ ] [ ] [ ]

'use strict';

// 1. Array 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index를 통한 접근방법
const fruits = ['apple', 'banans'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]); // console.log(fruit.length -1)

console.log("----------key in array")
for(const key in fruits){
    console.log(key);
}

console.log("----------val of objet")
for( let val of fruits ){
    console.log(val);
}

console.log("----------array length")
for(let ii = 0; ii < fruits.length; ii++){
    console.log(fruits[ii]);
}

//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//forEach 함수는 두개의 인자가 전달되고 있네
// 인자 1 : callbackfn: (value: T, index: number, array: T[]) => void 
// 인자 2 : thisArg?: any 여기서 ?가 있다는 것은 파라미터를 전달해도 되고 안해도 된다는 의미이다.
// 그리고 calbackfn 함수에는 총 3가지의 인자가 전달되고 있네
//                             (value: T, index: number, array: T[])
//                             value 는 배열의 값, index는 배열의 인덱스, array: T[]는 전체적인 배열도 전달
//                            즉 콜백함수에는 사과,0,fruit   바나나,1,fruit 가 전달된다는 말이다.

console.log('---------------forEach')
// fruit.forEach( 함수{}, ?)
fruits.forEach( function(){
    console.log('hi'); // 이게 몇번 출력될까 2번일것이다. 왜냐문 fruit은 두개의 인자를 가지고 있기때문이다.
})

console.log('---------------forEach--2')
// function()에는 3개의 인자가 전달되고 있다.
fruits.forEach( function(fruit,index,farray){
    //console.log(index + ':' + farray[index] + ':' + fruit);
    console.log(index, fruit, farray);
    //console.log(farray);
} );

fruits.forEach( function(fruit,index){
    console.log(index, fruit);
} );

// 위의 function을 arrow function으로 정의하면
fruits.forEach( (fruit,index) => {
    console.log(index, fruit);
} );

// 그리고 arrow funtion에서 코딩줄이 한줄이면 {} 제거해도 된다.
fruits.forEach( (fruit,index) => console.log(index, fruit) );

// index도 삭제하면
console.log('---------------forEach--4')
fruits.forEach( (fruit) => console.log(fruit) ); // 첫번째 값을 말한다.


//-----------------------------------------------------------------
// 4. Addition, deletion, copy
// 배열의 마지막 데이타 추가 : push
fruits.push('cherry','pear');
console.log(fruits); 

// 배열의 마지막 부터 데이타 삭제 : pop
fruits.pop();
console.log(fruits); // pear 제거

fruits.pop();
console.log(fruits); // cherry 제거

// 배열의 앞에서 부터 데이타 추가 : unshift
fruits.unshift('cherry','pear');
console.log(fruits); // cherry 제거
// 배열의 앞에서 부터 데이타 제거 : shift
fruits.shift();
console.log(fruits); // cherry 제거
fruits.shift();
console.log(fruits); // cherry 제거

// 여기서 중요한 점
// shift 와 unshift는 pop과 push보다도 많이 느리다 당연하지
// 즉 배열의 데이타를 다시 정비해야 되는 경우에는 느리게 된다는 말이다. 재정렬이 많다


// 베열의 지정된 위치의 것을 삭제 : splice
fruits.push('cherry','pear','lemon');
console.log(fruits); 
fruits.splice(1,2); // 1번 인덱스 부터 2개를 제거한다.
console.log(fruits); 

fruits.splice(1,1,'apple','melon'); // 1번 인덱스 부터 1개를 제거한다. 이후 사과와 레몬을 집어넣어줘
console.log(fruits); 



