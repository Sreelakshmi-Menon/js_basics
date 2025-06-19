//longest word
let sntc = " the indian express "
const words = sntc.split(' ');
let longestWord = '';
for (let word of words) {
    
    if(word.length > longestWord.length){
        longestWord=word;
    }
}
console.log("The longest word is : "+longestWord);