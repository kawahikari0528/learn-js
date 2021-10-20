//함수에는 __proto__ 말고도 prototype도 있는데 이 객체는 constructor만 가지고 있고 constructor는 함수를 가리킨다.

const foo = function(){
    return function(){
        console.log('this function is the return value')
    };
};//함수를 리턴함
const bar = foo();
bar();


// const foo = function(func){
//     func();
// };//func라는 함수를 받아옴

// foo(function(){
//     console.log('function and be used as the argument');//이게 함수임(한마디로 이걸 호출한거임)
// });//함수 실행



// const foo = 100;

// const bar = function(){
//     return 100;
// };
// //bar는 참조값을 가지고 있음

// console.log(bar());





// const obj = {};
// obj.baz = function(){return 200;};
// console.log(obj.baz());

// const arr = [];
// arr[0] = function(){return 300;};
// console.log(arr[0]());


// function add(x,y){
//     return x+y;
// };//함수는 일급객체(값처럼 사용 가능함)

// add.result = add(3,2);
// add.status = "OK";

// console.log(add.result);
// console.log(add.status);
// console.log(add);



//프롬프트, 알럴트