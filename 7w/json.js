
// HTTP
// AJAX - Asynchronous JavaScript And XML
//      - 서버와 동적으로 통신을 할수 있는 기술
// XHR : XMLHttpRequest의 오브젝트가 존재한다.
//       XMLHttpRequest Object는 브라우저 API에서 제공하는 오브젝트중에 하나이다.
//       이 오브젝트를 이용해서 간단하게 서버에서 데이터를 요청하고 수신할수 있다.
//       최근에는 fetch() API가 신규로 나왔다.
//       fetch는 expleor에서 사용되지 않는다.
// 그런데 이런 XML 형식의 통신은 불필요한 태그가 많이 들어가게 되고
// 가독성도 좋지않게 된다.
// 그래서 요즘은 JSON을 많이 사용한다.
// JSON - JavaScript Object Notation
//        1999년도에 ECMAScript 3rd 판에서 발표되었다.
//        Object { key:value }
//          Simple data interchange format 데이타가 주고받을 수 있는 가장 간단한 포맷이다.
//          lightweight text-based structure 텍스트 기반으로 가볍다.
//          key-value pairs 키와 밸류로 이루어진 파일포맷이다.
//          easy to read 사람눈으로 읽기가 편하다.
//          used for serialization and transmission of data between the network and the network connection 네트웍을 통한 통신일때 직렬화와 데이타를 전송하기 위해서 사용된다.
//          independent programming languae and platform 가장 중요한 사실은 프로그램 언어나 플랫폼에 상관없이 사용될 수 있다. C JAVA PYTHON GO PHP
//                          이런 모든 언어들은 JSON에 대해서 JSON에 대해서 시리얼라이즈하게 해주고 해당 언어에 맞는 오브젝트로도 변환된다.
//  
//          Object -----> serialize -----> JSON
//                 <---- deserialize <---- 
//

// 1. OBJECT 을 JSON으로 변환
// stringfy(obj)

// stringify(value: any, 
//            replacer?: (this: any, key: string, value: any) => any,
//            space?: string | number)
//            : string;
// stringify 함수는 3개의 인자를 전달해준다.
// replacer?: (this: any, key: string, value: any) => any 의 콜백함수는 ? 표가 있는 보아서는 해도 되고 안해도 되는 것이다. 그리고 이 콜백함수는 특정 값을 리턴한다.
// 이 함수의 리턴값은 스트링이다.

// boolean 값을 json으로 변환
let json = JSON.stringify(true);
console.log(json);

// 배열을 json으로 변환
json = JSON.stringify(['apple','banana']);
console.log(json); // ["apple","banana"] 잘보면 싱글쿼터가 더블쿼터로 바뀐것을 알수 있다. 이것이 JSON의 규격사항이다.

// 오브젝트를 json으로 변환
const rabbit = {
    name : 'tori' ,
    color : 'white',
    size : null,
    birthDate : new Date(),
    Symbol : Symbol('id'),
    jump: () => {
        console.log(`${name} can jump`)
    }
}

// 오브젝트를 json화 시킬때 오브젝트내의 함수는 포함하지 않는다.
// 함수는 오브젝트의 데이타가 아니라는 말이다.
// 자밧그크립터에만 존재하는 symbol도 포함되지 않는다.
json = JSON.stringify(rabbit);
console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2021-05-26T07:58:40.751Z"}

// 토끼오브젝트에서 이름만 json으로 하고 싶다면 
// stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
json = JSON.stringify(rabbit,['name']);
console.log(json) // {"name":"tori"}

// 해당하는 목록한 json화 가능하다.
json = JSON.stringify(rabbit,['name','color']);
console.log(json) // {"name":"tori","color":"white"}

// 해당하는 목록한 json화 가능하다.
console.log('------');
json = JSON.stringify(rabbit, (key, value) => {
    //console.log('key: ' + key + ',value: ' + value);  
    return value;
});
console.log(json);

console.log('------');
json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'roian' : value ;
});
console.log(json);

// 이렇게 콜백함수를 이용해서 json 파일을 세밀하게 조정할수 있다.

// JSON을 OBJECT로 변환하는 방법
{
    console.log("object를 json화 시키고 json을 다시 객체화 시킨다.")
    let json = JSON.stringify(rabbit);
    const obj = JSON.parse(json);
    console.log(obj);

    // 그런데 여기서 주의해야 될 점은
    // json화 시킬수 우리는 함수는 포함되지 않는다고 했다. 그래서 obj.jump()라고 하면 에러가 날것이다.
    // json화 시킬때는 데이타만이 포함된다.
    //obj.jump(); //TypeError: obj.jump is not a function

    console.log( rabbit.birthDate.getDate());
    //그런데 이부분도 에러가 날것이다.
    //왜냐하면 obj.birthDate는 스트링이기때문에 getDate()함수를 사용할 수가 없는 것이다.
    // console.log( obj.birthDate.getDate() );
    console.log( json ); // {"name":"tori","color":"white","size":null,"birthDate":"2021-05-26T08:29:22.386Z"} 이런식으로 스트링으로 된 객체이기 때문이다.
    console.log( rabbit ); // 여기서 rabbit를 출력해보면 birthDate는 하나의 ' '없이 객체로 만들어진것을 알수 있다. new Date() 오브젝트이다.ㅣ
    // {
    //     name: 'tori',
    //     color: 'white',
    //     size: null,
    //     birthDate: 2021-05-26T08:30:02.055Z,
    //     Symbol: Symbol(id),
    //     jump: [Function: jump]
    //   }

    // 그럼 json obj에서 우리는 특정 객체를 만들수 없을까라는 주제로 가게된다.
    // 해보자

    const obj2 = JSON.parse(json, (key, value) => {
        // 키가 만약 birthDate이면 new Date(value)를 생성하고, 아니면 그냥 value를 사용하자
        return key === 'birthDate' ? new Date(value) : value  ;    
    })
    // 에러가 나오지 않고 정상출력 될것이다.
    console.log(obj2.birthDate.getDate());
    
}

//========================================================================================================
// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/ -- 두개의 json 파일의 차이점을 확인할때 유용
// JSON Beautifier/editor: https://jsonbeautifier.org/ -- 망가진 json 포맷파일을 정렬시켜준다.
// JSON Parser: https://jsonparser.org/ -- json 타입을 object 화시켜서 보고 싶은 경우 사용.
// JSON Validator: https://tools.learningcontainer.com/json-validator/ -- json 타입이 정상적인지 확인할수 있다.
