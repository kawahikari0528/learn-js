// function solution(progresses, speeds) {
//     var answer = [];
//     let progressesstack = [], speedsstack =[];
//     let out = 0, answercount =0;
//     for(let i = progresses.length-1;i>=0;i++){
//         progressesstack.push(progresses[i]);
//         speedsstack.push(speeds[i]);
//     }

//     for(;progressesstack.length>0;){
//         for(let i=0;i<progressesstack.length;i++){
//             progressesstack[i] += speedsstack[i];
//         }
//         if(progressesstack[progressesstack.length-1]>=100){
//             progressesstack.pop();

//             out++;
//             if(progressesstack.length ==0) {
//                 answer[answercount++] = out;
//                 break;


//             }
//             while(progressesstack[progressesstack.length-1]>=100){
//                 progressesstack.pop();
//                 out++;
//                 if(progressesstack.length ==0) break;
//             }
//             answer[answercount++] = out;
//         }

//     }

//     return answer;
// }
function solution(priorities, location) {
    var answer = 0;
    let temp = 0, save, length = priorities.length, finded = false;
    let list = [];
    for(let i=0; i<priorities.length;i++){
        list[i] = i;
    }

    for(let count =0;priorities != 0;count++){

        for(let i=1;i<priorities.length;i++){

            if(priorities[0]<priorities[i]){
                
                finded = true;
                list.push(list[0]);
                list.splice(0,1);
                priorities.push(priorities[0]);
                priorities.splice(0,1);
                console.log(list);
                break;
            }

        }
        if(!finded){
            for(let i =0; i<list.length;i++){
                if(list[i] == location) answer = i+1; 
            }
            if( priorities[0] == priorities[temp]) {
                answer = temp+1;
                priorities.shift();
                break;
            }
            priorities.shift();

        }
        finded = false;
    }

    
    return answer;
}

console.log(solution([2, 4, 8, 2, 9, 3, 3], 2));
// function solution(progresses, speeds) {
//     var answer = [];
//     let out = 0,count =0, answercount =0;
//     for(let i  =0; count != progresses.length ; i++){
//         if(i>=progresses.length) i =0;
//         progresses[i]  = progresses[i]+ speeds[i];
//         console.log(progresses[i]);

//     }

//     return answer;
// }
//console.log(solution([93, 30, 55], [1, 30, 5]));

// function solution(num) {
//     while(num!= 1){
//             if(num%2 ==0){
//         num /=2;
//     }
//     else if(num%2 ==1){
//         num *=3;
//         num++;
//     }
//     }

//     return num;
// }

// console.log(solution(6, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]));

//비구조화 할당(밖으로 꺼내옴)
/*const obj = {
    name: "seo",
    age: 29,
    major: "computer science",
}

const arr = ["seo",29,"computer science"];

const {name: nickname, age, major} = obj;
const [one,two,three] = arr;

console.log(nickname);
console.log(age);
console.log(major);
console.log(one);
console.log(two);
console.log(three);
*/
//22 비구조화 할당을 함수로 하기
/*const func = function({a,b}){
    console.log(a);
    console.log(b);
};

const obj = {a:1, b:2};

func(obj);
*/


//reduce는 누적계산
/*const arr = [1,2,3,4,5];
const result = arr.reduce((acc,cur)=>(acc+=cur));
console.log(result);
*/




//filter 조건에 맞는 요소들로   배열 생성
/*const arr = [
    {
        id:1,
        done:true,
    },
    {
        id:2,
        done:false,
    },
    {
        id:3,
        done:true,
    },
];
const who = arr.filter((e) => e.done === false);

console.log(who);
*/


//concat 뒤에 붙여서 배열 생성
/*
const arr1 = ["a","b","c"];
const arr2 = ["d","e","f"];
const result = arr1.concat(arr2);
const result2 = arr1.concat(["g","h","i"]);
console.log(result);
console.log(arr1);
console.log(arr2);

*/


/*const arr = ["apple","pear","orange","wtrawberry","apple"];
console.log(arr.indexOf("apple"));
console.log(arr.indexOf("orange"));
console.log(arr.indexOf("banana"));//indexof
*/

//find
/*
const arr = ["a","ab","abc","abcd","abcde"];
const arr2 = arr.find((e) =>e)
console.log(arr2);
*/
/*
const arr = ["a","ab","abc","abcd","abcde"];
const arr2 = arr.map((e) =>e**2)
console.log(arr2);
*/
/*const arr = [1,2,3,4,5];
let result = 0;

arr.forEach((e) => {
    result +=e;//하나씩 더해주기
});

console.log(`sum: ${result}`);
*/

/*
const a = 17;
console.log(`제 나이는 ${a}입니다.`);
*/



/*
const arr = ['zero','one','two','three'];
console.log(arr.length);
arr.splice(2,1,'five');//splice 는 아에 없애버리기
console.log(arr);
console.log(arr.length);
*/

/*
const arr = ['zero','one','two','three'];
console.log(arr.length);
delete arr[2];//delete 는 값만 지우기

console.log(arr);
console.log(arr.length);
*/

/*
const arr = ['zero','one','two'];

arr.color = 'blue';
arr.name = 'number_array';
//for in 문은 프로퍼티까지 출력
for(let prop in arr){
    console.log(prop, arr[prop]);
}

for(let i = 0; i<arr.length ; i++){
    console.log(i, arr[i]);
}
*/

/*
//배열은 array.prototype 다른 객체는 object.prototype
const colorsArray = ['orange','yellow','green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

const colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);//사용불가

colorsArray.push('red');
colorsObj.push('red');//사용 불가
*/