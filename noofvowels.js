//count no of vowels in a string
const vowels=['a','e','i','o','u','A','E','I','O','U'];
const str= 'mobile';
let count = 0;
for (let char of str) {
    if(vowels.includes(char)){
    count++
}
}

console.log(count);