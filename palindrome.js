//palindrome

const str = "mam";
const rev = str.split("").reverse().join("");
if(str==rev){
    console.log("The string is palindrome");
}else{
    console.log("Not a palindrome")
}