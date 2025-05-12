	//lets looks at numbers and some of the basic operations  you can perform with them.

	//variables
	let num1 = 4;
	let num2 = 2;
	const num3 = 4.5;
	const num4 = 4.5;
	const myVar = 'A string';
	const myVar2 = 'Another string';
	

	//basic maths operations
	//print out te result
	console.log(num1 + num2); // returns 6
	console.log(num1 - num2); // returns 2
	console.log(num1 * num2); // returns 8
	console.log(num1 / num2); // returns 2


	//floating points inaccuracy 
	console.log(0.1 + 0.2); // returns 0.30000000000000004
	console.log(0.2 + 0.4); // returns 0.6000000000000001

	//other operations like modulus operator
	//this is basically the remainder after you divide two numbers
	console.log(13 % 5); // returns 3
	console.log(4 % 2); // returns 0
	// use the rise operator to raise a number to a power
	console.log(2 ** 3); // returns 8
	console.log(2 ** 4); // returns 16

	// use the builtin math object
	// Increment and Decrement


	//it won't due to const applied to the variables now change to let 
	//num1 = num1 + 1; // returns 5
	//num1++;  // returns 5 the ++ only works with 1 
	//num2 = num2 - 1; // returns 1
	//num2--;  // returns 1

	//but when using a different number like 2 
	//num1 += 2; 
	//num2 -= 2;
	//console.log(num1);
	//console.log(num2);

	//comparison operators
	console.log(num1 > num2); 
	console.log(num1 >= num2);
	console.log(num1 < num2);
	console.log(num1 <= num2);
	console.log(num1 == num2);
	console.log(num1 === num2);
	console.log(num1 != num2);
	console.log(num1 !== num2);

	//NaN 
	console.log(num1 * 'A string'); // returns NaN

	//infinity
	console.log(9_000_000 ** 9_000_000); // returns Infinity
	console.log(Number.NEGETIVE_INFINITY); // returns -Infinity


	//math object
	console.log(Math.PI); // returns 3.141592653589793
	console.log(Math.sqrt(25)); // returns 5
	console.log(Math.pow(2, 3)); // returns 8
	console.log(Math.round(6.6)); // returns 7
	console.log(Math.round(6.3)); // returns 6
	console.log(Math.ceil(6.3)); // returns 7
	console.log(Math.floor(6.7)); // returns 6
	

	//converting 

	console.log(myVar + myVar2); // returns "Another stringA string"
	console.log(myVar + num1); // returns "Another stringA string"

	//string to number 
	console.log("2" + 2); // returns "22"
	console.log(parseInt("2") + 2); // returns 4

	//conveert to a string 
	console.log(2 + ''); // returns "2"
	console.log(`${2}`); // returns "2"

	//BigInt
	// BigInt is a new data type in JavaScript that represents integers of arbitrary size.
	let maxInt = Number.MAX_SAFE_INTEGER;
	console.log(maxInt);
	maxInt++;
	console.log(maxInt);
	maxInt++;
	console.log(maxInt); // returns 9007199254740991