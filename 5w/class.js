// 11. class
// 연관있는 데이타와 행위를 한데 모아놓은 것을 말한다.
// class person {
//     name ;
//     age ;
//     speak() ;
// }

// 클래스와 오브젝트의 차이점
// 클래스는 오브젝트를 만들기위한 템플릿이죠
// 만약 붕어빵을 만들기 위해서 우리는 처음 붕어빠을 구울수 있는 틀을 만들것입니다.
// class 붕어빵틀 {
//     char 재료
//     char 모양
//     int 재료를붇는다()
//     int 재료를굽는다()
// }
// 여기서 만약 재료가 팧을 집어넣어 팧붕어방, 피자를 집어 넣으면 피자붕어빵이 되죠
// 이처럼 붕어빵틀에 다른재료를 집어넣어 구운것들은 오브젝트라 하는 것이죠
// 인생도 같습니다.char

// 여러분의 인생에
// 탛을 넣을 것인지 피자를 넣을 것인지는 여러분의 선택이고
// 아버지는 이런 형틀을 만들어 주는 것이죠

// 어떻게 생각하면 우리는 알지못하지만 객체지향을 사용하고 있죠
// 그런데 문제는 그것이 하나의 덩어리내에서만 하려 했으니 힘들었던 것이죠
// 즉 C에서는 main() 함수 하나안에 각종 변수를 선언하고 함수를 선언해서 사용한 것이죠
// 그런데 하나의 덩어리로 유지보수 하려니 그리고 표현하려니 많은 제약사항이 따르게 되었죠
// 그래서 그럼 좀더 쪼개의 볼까
// 사람이라면 머리 다리 가슴 손 등이렇게 각기 나누어서 생각하기 시작한 것이죠
// 그리고 이에 맞게 언어도 다르게 생각하고 통합 연계 상속 다형성 등을 생각하게 되었죠
// 그럼 많아 졌으면 어떻게 되는가요
// 당연히 서로 인터페이스가 힘들겠죠
// 요즘의 마이크로 서비스의 형태로 마찬가지이죠
// 우리는 이런 서비스의 형태가 나오면 이게 맞는 솔루션 개발방법 플랫폼 조직 SRD 등이 정리되어
// 나오고 기술도 새로워 지는 것이죠
// 그런데 알고보면 다 같은 이치에서 나온다는 것을 이해했으면 좋겠네요

// 클라우드도 마찬가지 아니까요
// 하나의 커다란 덩치에서 서비스할려니 리소스의 낭비가 많았던 것이죠
// 그럼 이런 리소스를 잘배분할 아키텍처가 필요한 것이죠
// 그리고 조직이 점점더 세분화되니 세상이 마이크로화 되니 당연히 서로 주고 받는 데이타도 많아지게되고
// 이로인해 빅데이타가 필요하고 아에따라 AI도 발전하고
// 다 같네요

// 이런 작은 서비스들을 잘 효율적으로 관리하기 위해서는
// VM - Docker 개념들이 나오게 되었죠
// 물론 도커야 옛날부터 있은 개념이라 하더군요

// 덩어리가 깨지지 붙일게 필요하고 또 다양한 프로토콜이 나오고 다양한 방법론이 나오고....
// 언제인가는 다시 하나로 합쳐지는 세상이 오지 않을까요


'use strict';

// 1. 클래스 선언
class Person {
    // 생성자
    constructor (name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello`);
    }
}

const roian = new Person('roian',20);
console.log(roian.name);
roian.speak();



// set,set 함수는 
// 생성자에서 this.age 라고 호출하면 set age(val)를 먼저호출하고
// setage() 함수가 완료된다.
// 즉 우리가 this.age라고 호출하면 getage() 함수가 호출되고
// = age 라는 처리를 만나면 이때 비로소 setage() 함수를 호출한다.
// 그런데 문제는 이렇게 this.age라고 계속하면 계속해서 getage() 함수가 호출되어
// call stack size exceed라는 에러메시지가 나올것이다.
// 그래소 set get 함수내의 클래스 필드들에 대해서 _(언드바) 를 붙인다.
class User {
    constructor(firstName, lastName, age){
        console.log('constructor--1');
        this.firstName = firstName;
        this.lastName = lastName;
        console.log('constructor--2');
        this.age = age;
        console.log('constructor--3');

        console.log('constuctor----5')
        this.age;
        console.log('constuctor----6')
    }

    get age(){
        console.log('get--1');
        return this._age;
    }

    set age(value){
        console.log('set--1');
        this._age = value < 0 ? 0 : value;      
    }

}

const user = new User('roian','jang',-1);

console.log(user.age);

//---------------------------------------------------------
// 3. fields (public, private)
class Experiment {
    publicField = 1;
    #privatField = 3;    
}

const expriment = new Experiment();
console.log(expriment.publicField); // 1
console.log(expriment.privatField); // undefined


//---------------------------------------------------------
// static 지정은 생성된 오브젝트에서 붙어 있는 것이 아니라 클래스 자체에 정의되어 있다.
// 그래서 static 필드를 호출할때는 클래스명으로 해서 호출한다.

class Article {
    static publisher = 'Dream Coding';
    constructor (articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log("---");
console.log(article1.publisher);
console.log("---");
console.log(Article.publisher);
Article.printPublisher();


// 상속 다형성
// 여러분이 만약 네모 도형, 원형 도형, 삼각형 도형을 만든다고 생각해봅시다.
// 자 그럼 각 도형에 대한 속성을 먼저 생각해보죠
// 넓이를 구하기 위해 넓이와 높이가 있어야 되겠죠
// 그리고 속성중에는 색상도 있을구 있구요
// 그럼 이 세가지 도형에서 같이 반복되는 것을 모아서 정의해볼수도 있겠죠
// 그래서 우리는
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.color = color;
        this.height = height;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {}

const rectangle = new Rectangle(20,20,'blue');
const triangle = new Triangle(20,20,'red');

rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea()); 
//여기서 문제가 생긴다, 왜냐하면 class Shape의 draw는 사각형의 넓이 공식이어서
//삼각형일 경우는 다르게 해야 된다. 그럼 어떻게 해야 될까
//이때 삼각형을 만든 선언에서 getAre() 영역만 새로 만들어 준다.
//이게 다형성 이다.

class Triangle2 extends Shape {
    // overriding한다.
    getArea(){
        return ( this.width * this.height) / 2;
    }

    draw(){
        super.draw();
        console.log('삼각형 출력이다.')
    }
}
const triangle2 = new Triangle2(20,20,'red');
console.log(triangle2.getArea()); 

//---------------------------------
// 6. Instance of
// 특정 인스턴스가 어떤 클래스로 만들어졌는지 아닌지 확인하는 것을 말한다.
console.log(rectangle instanceof Shape);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle instanceof Rectangle);

