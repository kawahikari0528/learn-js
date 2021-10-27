
// function solution(new_id) {
    
//     function DeleteOther(str){  
//         var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
//         //특수문자 검증
//         if(reg.test(str)){
//           //특수문자 제거후 리턴
//           return str.replace(reg, "");    
//         } else {
//           //특수문자가 없으므로 본래 문자 리턴
//           return str;
//         }  
//       }
//     var answer = '';
//     let ID = '', otherword = [], findDot = false;
    
//     ID = new_id.toLowerCase();
    



//     ID=DeleteOther(ID);

//     for(let i in ID){
//         ID = ID.replace("..",".");
//     }

//     if(ID[0] == '.'){
//         ID = ID.replace(".","");
//     }
//     if(ID[ID.length-1] == '.'){
//         ID = ID.slice(0, -1);
//     }
//     if(ID === ""){
//         ID = "a";
//     }
//     if(ID.length >= 16){
//         ID = ID.slice(0,16);
//     }
//     if(ID.length <=2){
//         while(ID.length >2){
//             ID = ID+ID[ID.length-1];
//         }
//     }
//     answer =ID;
    
//     return answer;
// }

// console.log(solution("...!@BaT#*..y.abcdefghijklm"));

function solution(s) {
    var answer = '';
    if(s.length%2 == 0){
        answer = s[s.length/2-1]+s[s.length/2];
    }
    else if(s.length%2 ==1)
    {
        answer = s[(s.length-1)/2];
    }
    return answer;
}

console.log(solution("abcde"));