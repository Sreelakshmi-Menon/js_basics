//capitalise 1st letter of every word
const sentence = "the indian express";
let capitalst = sentence.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ');
console.log(capitalst);