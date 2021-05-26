
'use strict'

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }    
}

const students = [  new Student('A',29,true,45),
                    new Student('B',28,false,46),
                    new Student('C',30,true,47),
                    new Student('D',10,false,90) 
                ];   


// find a students with the score 90
const student = findStudent(students)
if( student === undefined){
    console.log('----' + student)
}
else{
    console.log(student.score)
}

function findStudent (objs) {
    for(const key in objs){
        const student = objs[key];
        if ( student.score >= 90 ){
            //console.log(student.score) 
            return student;            
        }
    }
    return undefined;    
}


//-------------------------------------------------------------------------------
// 1. 점수가 90점이상인 학생을 찾아라

console.log("-------------------------")
const result = findArray(students,90);
console.log(result);

function findArray(arrays,score){ 

    // 1. 정규 함수형으로 표시
    // const result = arrays.find( function(value, index) {
    //     return value.score === score;
    // });

    // 2. 간략형 함수로 표시
    // 한줄인 경우에는 function {} 생략가능, return 생략가능
    const result = arrays.find( (value, index) => value.score === score );

    return result;
}

// 2. 등록한 학생물 등록된 학생만 찾아서 배열로 만들어라
// 배열의 필터기능을 이용하자
const arr = new Array();


console.log("-------------------------")
// filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// value.enrolled가 true인 것들만 모아서 리턴한다.
const result2 = students.filter( (student,index, students) => student.enrolled)
console.log(result2);

// 3. 등록한 학생들의 점수만 찾아서 신규 배열로 작성

// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

// callbackfunction의 역할은 student가 인자로 들어오면 그냥 student로 리턴한다.
console.log("-------------------------3")
const result3 = students.map( (student) => student );
console.log(result3);
    

console.log("-------------------------4")
// 이번 콜백함수는 학생들이 가지고 있는 점수만을 리턴한다.
const result4 = students.map( (student) => student.score );
console.log(result4);

console.log("-------------------------5")
// 이번 콜백함수는 학생들이 가지고 있는 이름,점수만을 리턴한다.
const result5 = students.map( (student) => [student.name, student.score] );
console.log(result5);

// 4. 학생들 중 점수가 50 이하인 친구를 찾아주세요
//some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
console.log("-------------------------6")

// some() 콜백함수는 점수가 50이하인 학생을 만나면 바로 리턴한다.
const result6 = students.some( function(student, index, students){
    return student.score < 50 ;
});
console.log(result6);

const result66 = students.some( (student) => student.score < 50 );
console.log(result66);

// every() 콜백함수는 모든 학생의 점수가 50보다 낮다면 true, 그렇지 않다면 false가 리턴된다.
// every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
console.log("-------------------------7")
const students7 = [ new Student('A',29,true,41),
                    new Student('B',28,false,42),
                    new Student('C',30,true,43),
                    new Student('D',10,false,44) 
                ];   

const result7 = students7.every( function(student){
    return student.score < 50
})
console.log(result7)


// 5. 학생들의 평균점수를 구하라
