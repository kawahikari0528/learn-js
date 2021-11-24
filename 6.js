// arguments 객체 유사배열 

// function allAdd(){
//     let result;
//     for(let i =0; i<arguments.length;i++) result += arguments[i];
//     return result; 
// }
// console.log(allAdd(1,2,3,4));




// function allAdd(arr){
//     return arr.reduce((pre, cur) => pre += cur);
// }
// console.log(allAdd([1,2,3,4]));


// const myObject = {
//     name: 'foo',
//     sayname: function(){
//         console.log(this.name);//this는 호출한 객체를 가리킴
//     }
// };

// const otherObject = {
//     name: 'bar',
// };

// otherObject.sayname = myObject.sayname;

// myObject.sayname();
// otherObject.sayname();


// const foo = "I'm foo";
// console.log(foo);
// console.log(global.foo);
//global은 전역을 가리킴

// var abc = "This is the test";
// console.log(window.abc);
// const sayFoo = function(){
//     console.log(this.abc);
// }
// sayFoo();
// //전역함수에서는 this가 전역을 가리킴



const value = 100;
const myObject = {
    value: 1,
    func1: function(){//메서드
        this.value +=1;
        console.log('func() called, this. value : ' + this.value);
        func2 = function(){//내부함수
            this.value += 1;//전역에 있는 value
            console.log('func2() called, this. value : ' + this.value);
            func3 = function(){//내부함수
                this.value += 1;// 전역에 있는 value
                console.log('func3() called, this. value : ' + this.value);
            }
            func3();
        }
        fun2();
    }
}
