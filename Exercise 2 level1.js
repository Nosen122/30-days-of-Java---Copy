// 1.
let challenge = '30 Days Of JavaScript';
// 2.
console.log(challenge);
// 3.    
console.log(challenge.length);
// 4. 
console.log(challenge.toUpperCase());
// 5. 
challenge.toLowerCase();
console.log(challenge.toLowerCase())
// 6.    
console.log(challenge.substr(0, 1));
// 7.
console.log(challenge.substring(0,2));
// 8. 
console.log(challenge.includes("Script"));
// 9. 
let arr = challenge.split(" ")
// 11.
let arr_2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", ");
// 12
const change = challenge.replace("JavaScript", "Python");
console.log(change);
// 13
let charAt15 = challenge.charAt(15);
// 14
let charCodeOf_J = challenge.charCodeAt(11) 
// 15  
let firstOccurranceOf_a = challenge.indexOf("a", 1);
// 16     
let lastIndexOf_a = challenge.lastIndexOf("a");
// 17 
const sentence = "You cannot end a sentence with because because because is a conjunction";
let firstOccurBecause = sentence.indexOf("because", 1);
// 18
let lastOccurBecause = sentence.lastIndexOf("because");
// 19
firstOccurBecause = sentence.search("because", 1);
console.log(firstOccurBecause);
// 20
let trimmed = ' 30 Days Of JavaScript '.trim();
// 21
let startsWith30 = challenge.startsWith("30");
// 22
let endsWith_t = challenge.endsWith("t");
// 23
let pattern = /a/gi;
let listOfAll_a = challenge.match(pattern);
console.log(listOfAll_a);
// 24
let merged = "30 Days Of ".concat("JavaScript");
// 25
console.log("30 Days Of JavaScript".repeat(2));
