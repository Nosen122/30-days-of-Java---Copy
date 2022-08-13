

// 1
let b = prompt("Enter base: ");
let h = prompt("Enter height: ");
console.log("The area of the triangle is ", 0.5 * parseFloat(b) * parseFloat(h));

// 2 
let a = prompt("Enter side a: ");
let b_side = prompt("Enter side b: ");
let c = prompt("Enter side c: ");
console.log("Ther perimeter of the triangle is ", parseFloat(a) + parseFloat(b_side) + parseFloat(c));
// 3
let length = parseFloat(prompt("Length: "));
let width  = parseFloat(prompt("Width: "));
console.log("Perimeter: ", 2 * (length + width));

// 4
console.log("Area of Circle: ", 2 * parseFloat(prompt("Radius: ")) * Math.PI);

// 5
let x_intercept = 1;
let y_intercept =-2;
let slope1 = 2;

// 6
let slope2 = (10 - 2)/(6-2);

// 7
slope2 > slope1 ? console.log("Slope2 is bigger"): console.log("slope1 is bigger");
// 8: brute force the value of 'x' to find value of 'y'
// --> let x = 1
let x = 1;
let y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

x = -3;
y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

// 9
let hrs = parseFloat(prompt("Enter hours: "));
let ratePerHr = parseFloat(prompt("Enter rate per hours: "));
console.log("your weekly earning is : ", hrs * ratePerHr);
// 10
console.log("My name is shorter than seven digits: ", "Hamza Mateen".length < 7);

// 11
let firstName = "Billie"
let lastName = "Gates"
console.log("Your first name, Billie is longer than your family name, Gates")

// 12
let myAge = 250;
let yourAge = 25;
console.log(`I am 225 years older than you`)

// 13
let birthYear = prompt("Enter birth year: ")
2022 - birthYear >= 18 ? 
console.log(`You are ${2022 - birthYear}. You are old enough to drive!`) 
 console.log(`You are ${2022 - birthYear}. You will be allowed to drive after ${18 - birthYear} years.`);

// 14
let yrsLived = parseInt(prompt("Enter number of years you live: "));
console.log(`You lived ${yrsLived * 31536000} seconds!`);

// 15
const now = new Date();

let mins = now.getMinutes();
let hrs  = now.getHours();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

// Format 1
console.log(`${year}-${month}-${date} ${hrs}:${mins}`);
// Format 2
console.log(`${date}-${month}-${year} ${hrs}:${mins}`);
// Format 3
console.log(`${date}/${month}/${year} ${hrs}:${mins}`);




//Exercise 3 level 3
const d = new Date();

let mins = d.getMinutes();
mins < 10 ? '0' + mins.toString(): mins;
let hrs  = d.getHours();
hrs < 10 ? '0' + hrs.toString(): hrs;

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month+1}-${date}  ${hrs}:${mins}`);