const gek = {name: 'sunghoon',age: 16, gender: 'male'};
let Null = null;//null과 undefined 의 형식은 objects
let nam = 'aaaa';
const num = 0.2;

// const a = false;//const는 못바꿈
//데이터 형식은 let 과 const ,형식 지정은 따로 필요 없다


console.log(gek['name']);//대괄호 표기법. 문자로 작음
console.log(gek.age);
gek.age = 17;//프로퍼티 갱신
console.log(gek.age);
console.log(gek['age']);//둘이 같음


/*
nam[0] ='p';
//문자열 일부수정 불가
nam = 'pp';
//재할당은 가능
*/

// console.log(Math.floor(num));//버림
// console.log(Math.ceil(num));//올림
// console.log(Math.round(num));//반올림

