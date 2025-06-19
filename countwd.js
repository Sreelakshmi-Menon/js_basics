//count no of words


// let sntc = " the indian express ";
// const words = sntc.split(' ').filter(word => word.length > 0);
// let count = words.length;
// console.log("No of words are : "+ count);

const str = " the indian express ";
const words = str.trim().split(' ');
let count =0;
for (let i=0;i<words.length;i++){
    if(words!==""){
        count ++;
    }
}console.log(count)