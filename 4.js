let self = function(){
    console.log("a");
    return function(){
        console.log("b");
    }
};
self = self();//self 함수 실행되면서 a 출력하고 리턴된 함수를 self가 다시 가리키게 됨
self();//그렇게 가리키는 함수를 호출하면서 b 출력


// function parent(){
//     const a = 100;
//     const child = function(){console.log(a);}
//     return child;
// }
// const inner = parent();
// inner();
//지역변수 사라져도 접근할 수 있게 하는 클로저 함수


// function parent(){
//     const a = 100;
//     const b = 200;

//     function child(){
//         const b = 300;
//         console.log(a);
//         console.log(b);
//     }
//     child();
// }
// parent();//내부함수
// child();//밖에서 호출하면 에러남



// (function(name){
//     console.log('this is the immediate funcion -> '+name);
// })('foo')//즉시 실행되는 즉시호출 함수



//함수에는 __proto__ 말고도 prototype도 있는데 이 객체는 constructor만 가지고 있고 constructor는 함수를 가리킨다.

// const foo = function(){
//     return function(){
//         console.log('this function is the return value')
//     };
// };//함수를 리턴함
// const bar = foo();
// bar();


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