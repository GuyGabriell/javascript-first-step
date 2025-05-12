/* how to define o r declare a string 
there are three common ways to declare a strings
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

//now we use template strings
//template strings are a new way to create strings

const fullName2 = `name: ${firstName} ${lastName}, job: ${jobTitle}`;
console.log(fullName2); //this is considered a more cleaner way to write the same thing

const html = `
<div>
Hi there ${fullName}
</div>
`;
console.log(firstName.length); 

// built in methods, oparating or functions, they allow to manipulate strings.

const html2 = `
<div>
Hi there ${fullName}
</div>
`;
console.log(firstName.length); 
//you can even grap some certain chars or part odf the str 
console.log(firstName.charAt(0)); // returns the first char
// you can also do that using the array notation
console.log(firstName[0]); // returns the first char
// how about indexOf
console.log(firstName.indexOf('u')); // returns the index of the first occurence of the char u
//using also the upper case
console.log(firstName.toUpperCase()); // returns the string in upper case
//using also the lower case
console.log(firstName.toLowerCase()); // returns the string in lower case
//part of the string using the substring method
console.log(firstName.substring(0, 2)); // returns the first two chars
//usig the includes method
console.log(firstName.includes('uy')); // returns true or false


