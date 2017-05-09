/*

ecma script 2015 or ES6

New features below:

1.Variable declarations with let and const

variables declared with VAR in ES5 are function scoped and LET and CONST are block scoped

Function scoped: within the curly braces of the function you have access to vars within the same functions

Block Scoped: is all the code between the curly braces like if statements for blocks while blocks etc

2. Blocks and IIFEs

new way of creating IIFES using the concepts of block scoped a block can also be a curly brace

3. Strings : Template literals



4.Arrow Functions
5.Destructuring
6.Arrays
7. The spread operator
8. Rest & Default Parameters
9. Maps
10.Classes and subclasses
11. How to use ES6 Today










*/

// 1. ES5


var name5 = 'Jane Smith';
var age5 = 23;
name5 = ' Jane Miller';

console.log(name5);

// ES6 LET is for values that you want to mutate or change and const is for constant values

const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'; cant mutate the const

console.log(name6);


//Function scoped: ES5


function driversLicence5(passedTest) {

    if (passedTest) {

    	console.log(firstName); // undefined as all vars are hoisted and set to undefined until the script is read
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car'); // this works because you can console log outside if statement and within the same function
}

driversLicence5(true);

//Block Scoped: ES6


function driversLicence6(passedTest) {

	//console.log(firstName); // this doesn't work at all can't use variable until it's declared due to temperal debt zone basically variables are hoisted but we still can't acess them until its declared.

    let firstName;
    const yearOfBirth = 1990; // have to declare let outside of if block so you can console.log outside of if block and have to declare name and value const outside of block to console.log outside

    if (passedTest) {

        firstName = 'John';

    }

    console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car');

}

driversLicence6(true);


let i = 23;

for(let i = 0; i < 5; i ++ ) { // console.logs for loop I because its block scoped but also logs the I above
	console.log(i);
}




//2. new way of creating IIFES using the concepts of block scoped a block can also be a curly brace



{ // this is an IIFFE very simple one

	const a = 1;
	letb = 2;
	var c = 3;
}

//console.log(a + b); // creates error because variables are block scoped and not accessible from the outside
console.log(c); // this is function scoped

// es5  IIFFE

(function() {
	var c = 3;
})();

console.log(c); // not accessible from outside the ES5 IIFFE


//3. Strings

let firsNameString = 'John';
let lastNameString = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {

	return 2016 - year;

}

//ES5

console.log('This is ' + firsNameString + ' ' + lastNameString + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');




//ES6 Template literals
console.log(`This is ${firsNameString} ${lastNameString}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} year old.`); // use backspace to open a template literals


// new string methods

const n = `${firsNameString} ${lastNameString}`;


console.log(n.startsWith('J')); // logs true
console.log(n.endsWith('th')); // logs true
console.log(n.includes(' ')); // includes a space logs true
console.log(`${firsNameString} `.repeat(5)); // repeats 5 times






































