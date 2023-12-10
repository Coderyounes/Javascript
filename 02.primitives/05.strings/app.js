// Strings
// => Concatenation
let fname = "Younes ";
let lname = "Bousfiha";
let fullName = fname + " " + lname;
console.log(fullName);
// using Method
let myName = fname.concat(lname);
console.log(myName);
//append
fname += "JS";
console.log(fname);
// lenght of string
let lengfname = fname.length;
console.log(lengfname);
// Cases
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
// Slices : func take 2 agument the start index & end index
console.log(fname.slice(0, 4));
// split & join
console.log(fullName.split(''));
console.log(fullName.split('f'));
console.log(fullName.split('').join(','));
console.log(fullName.split('f').join('+'));
// includes
console.log(fullName.includes('h'));
console.log(fullName.includes('x'));
// Trim
console.log(fullName.trim());
// Backtick using when we have a variable that has  a multi-line variable
// when log it it will include spaces , newlines ..etc
console.log(`${fname} ${lname} this is My Full Name using backtick`);
