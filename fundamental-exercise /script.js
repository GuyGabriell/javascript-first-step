
function convertMunitesIntoSeconds (minutes) {
  //const seconds = minutes * 60;
  //return seconds;

  return minutes * 60;
}


//console.log(convertMunitesIntoSeconds(2));
//console.log(convertMunitesIntoSeconds(3));


function ensureQuestion(str) {

  const lastChar = str.charAt (str.length - 1);
       //using equality operator

  //if (lastChar === '?') {
  //  return str;
  //}else {
  //  return str + '?';
  //}


      //using template str or template literals basically `` backticks
  //return `${str}?`;

          //use ternary operator
  return lastChar === '?' ? str : `${str}?`;

  
}

//console.log(ensureQuestion('Yes'));
//console.log (ensureQuestion('No'));
//console.log(ensureQuestion('What is your name'));



function maxNumbers(numbers) {
  let maxNumbers = numbers[0];

 // for (let i = 0; i < numbers.length; i++) {
 //   if (numbers[i] > maxNumbers) {
 //     maxNumbers = numbers[i];
 //   }
 //}


 //numbers.forEach(number => {
 //  if (number > maxNumbers) {
 //    maxNumbers = number;
 //  }
 //});

 //return maxNumbers;

 return Math.max(...numbers);
}


//console.log(maxNumbers([1, 2, 3,]));
//console.log(maxNumbers([1, 2, 3, 10, 100]));


// if i s an EVEN number change to Uppercase but when is ODD change to lowercase

//hello there  -> HeLlO ThErE
function sarcasticCase(str) {
  let newString = '';


  for (let i = 0; i < str.length; i++) {

  //  if (i % 2 === 0) {
  //    newString = newString + str[i].toUpperCase();
  //  }else{
  //    newString = newString + str[i].toLowerCase();


    //make shorter by using ternary operator
    newString += i % 2 ? str[i].toUpperCase() : str[i].toLowerCase();

  }

  return newString;
}


//console.log(sarcasticCase('Hello there'));
//console.log(sarcasticCase('React is a library'));


// nospace go throught each char in  str and update it if there is space

function noSpace(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newString = newString + str[i];
    }
  }

  //return newString;

  //you can also use the split and join methods

  return str.split(' ').join('');
}



 console.log(noSpace('Hello there'));
 console.log(noSpace('I am cool'));