'use strict';

// 변수는 변경될수 있는 값을 말한다.
// 선언은 let을 사용한다.

// 자바스크립터에서 변수를 선언할수 있는 정의는 let이다.
// 전에는 var를 사용했는데 EC6부터는 let이다.
// 물론 var를 사용해도 되지만
// var를 사용할 경우 여러가지 문제가 있다.
// 정의도 안된 것이 실행될수 도 있다는 말이다.

let gname = 'roian';
console.log(gname);

gname = 'hello';
console.log(gname);

age=4;
var age;
console.log(age); //선언 되기전에 할당해도 값이 정상적으로 나온다.

// 그런데 let을 이용하면 에러가 나온다.
age2=4;  //에러가 날것이다. var로 선언하면 에러가 나오지 않는다.
//var로 선언하면 에러가 나오지 않는 이유는 hoisting이라는 기능때문이다. 이 기능은 선언을 제일상단으로 끌어올려주기 때문이다.
// var hoisting === move declaration from bottom to top
// 그리고 var는 블럭스콥 {}이 없다. 즉 모든 변수는 글로벌로 정의된다는 것이다. 블럭을 철저히 무시하는 아이라는 것이다.

let age2;
console.log(age2);


{
    age4='roian4'
    var age4;
}
console.log(age4);

// {  }에 정의된 것은 {}내에서만 볼수 있다.
// {} 밖에서 선언된 변수들은 글로벌변수를 말하는 것이다.
// name name2는 글로벌변수이다.
// name 3는 로컬변수이다.

let gname2;
{
    let lname3 = 'roian3';
    console.log(lname3);
    
}

// var를 사용했을때는 변수가 선언되기전도 전에 사용되어 가비지값이 출력되는 경우가 많이 있었다. 그래서 나온것이  let이다.

console.log(gname2)

// 이런 글로벌변수는 처음부터 끝까지 메모리에 상주하게 된다.
// 그래서 이런것은 가능한 사용하지 않는 것으로 한다.



