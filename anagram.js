//check if given strings are anagrams 


function angrm(a,b){
    a=a.toLowerCase().split("").join("");
    b=b.toLowerCase().split("").join("");
    return a.split("").sort().join("")===b.split("").sort().join("")
}
let s1= "listen";
let s2= "silence";
if(angrm(s1,s2)){
    console.log("They are anagrams");
}else{
    console.log("They aren't anagrams");
}