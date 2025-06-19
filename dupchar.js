// const str= 'The indian express';
// let seen=new Set();
// let result = '';
// for (let char of str) {
//     if(!seen.has(char)){
//         seen.add(char);
//         result += char;
//     }
// }console.log(result);

const str= 'The indian express';
let result = '';
for (let i=0;i<str.length;i++) {
    if(!result.includes(str[i])){
        result += str[i];
    }
}console.log(result);
