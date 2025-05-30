
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


console.log(maxNumbers([1, 2, 3,]));
console.log(maxNumbers([1, 2, 3, 10, 100]));