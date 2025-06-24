//find occurance of a specific char in a str
let str = "hello world";
let char = "l";
let count = 0;
for(let i = 0;i < str.length; i++){
    if(str[i] === char){
        count ++;
    }
}
console.log(count)