const arr = ['zero','one','two',];
arr.push('three');
console.log(arr);
console.log(arr.length);

arr.length = 5;
arr.push('four');//length를 정해주면 length가 가리키는 인덱스에 삽입
console.log(arr);
console.log(arr.length);

// arr.length = 4;

// arr.length = 6;//줄였다가 다시 늘리면 그부분은 삭제됨
// console.log(arr);
// console.log(arr.length);

//length를 바꾸면 바꾼대로 된다.
// const arr = [0,1,2];
// console.log(arr.length);

// arr.length = 5;
// console.log(arr.length);
// console.log(arr);

// arr.length = 2;
// console.log(arr);
// console.log(arr[2]);








//length는 배열 내의 가장 큰 인덱스+1 length값과 배열내 데이터 개수는 다를 수 있다.
// const arr = [];
// console.log(arr.length);

// arr[0] = 0;
// console.log(arr.length);

// arr[1] = 1;
// console.log(arr.length);

// arr[2] = 2;
// console.log(arr.length);

// arr[100] = 100;
// console.log(arr.length);//length를 늘릴 수 있음



// const colorArr = ["black" ,1, "white", false, null ];
// const colorBrr = [];

// colorBrr[0] = 100;
// colorBrr[1] = 'fsdafa'//동적 생성 가능

// for(let i in colorBrr){
//     console.log(colorBrr[i]);
// }

// for(let i in colorArr)
// console.log(colorArr[i]);
// colorArr[5] = 66;//객체에 프로퍼티 동적생성 가능

// for(let i in colorArr)
// console.log(colorArr[i]);



// const a = 100;
// const A = {value : 100};
// function changeArg(a,A){
//     a = 200;
//     A.value = 200;

//     console.log(a);
//     console.log(A.value);
// }

// changeArg(a,A);

// console.log(a);//a는 주소가 아니라 값을 넘겨줬기 때문에 바뀌지 않음
// console.log(A.value);


// const a = 1;
// const b = "1";

// const A = {
//     value: 100,
// };

// const B = {value: 100};
// const C = B;//이거는 B가 가리키는 주소를 똑같이 가리키는 것 ( B는 주소를 가리킴 )

// console.log(a == b);//내용만 같아도 true 반환
// console.log(a===b);//내용은 물론 형식까지 같아야 true 반환
// console.log(A==B);
// console.log(B==C);
// console.log(B===C);





// console.log(A.value);
// console.log(B.value);

// B.value = 50;

// console.log(A.value);
// console.log(B.value);

// const f = {
//     name : "f",
//     age: 27,
//     major : "computer science",
// }

// console.log(f.name);
// delete f.name;
// console.log(f.name);

// delete f;
// console.log(f);

// for(let prop in f){
//     console.log(prop, f[prop]);
// }//프로퍼티 수 만큼 반복해줌