/* how to define o r declare a string 
there are three cpmmon ways to declare a strings
1. single quote
2. double quote
3. backtick
*/

//these are also known as template literals
const firstName = 'Guy';
const lastName = "Gabriel";
const jobTitle = `Web Developer`;

const storeName = "Gabriel's Store";
const storeName2 = "Gabriel's \"Special\" Store \\ Treats";
//but lets say you want to use the double quote in your string
//var storeName = "Gabriel's \"Special\" Store"; // the backslash is used to escape the double quote
console.log(storeName2);

console.log(firstName, lastName, jobTitle); // one can pass multiple arguments or parameters


// concatenation is the process of joining two or more strings together


// string concatenation
// you can actully do something like this
// const fullName = firstName + lastName; it will work but there will be a space between the two strings
const fullName = firstName + " " + lastName;
const aboutMe = 'name: ' + firstName + ' ' + lastName + ', job: ' + jobTitle;
console.log(aboutMe);

console.log(fullName);