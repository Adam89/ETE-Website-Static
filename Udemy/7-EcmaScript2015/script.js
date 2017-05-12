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


Arrow functions : lexical THIS keyword biggest advantage is that they share the surrounding this keyword. Unlike normal functions arrow function don't get their own THIS keyword. They simply use
the this keyword of the function they are written in. So we say they have a LEXICAL THIS variable

5.Destructuring
6.Arrays
7. The spread operator
8. Rest & Default Parameters
9. Maps
10.Classes and subclasses
11. How to use ES6 Today










*/

// // 1. ES5


// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = ' Jane Miller';

// console.log(name5);

// // ES6 LET is for values that you want to mutate or change and const is for constant values

// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'Jane Miller'; cant mutate the const

// console.log(name6);


// //Function scoped: ES5


// function driversLicence5(passedTest) {

//     if (passedTest) {

//         console.log(firstName); // undefined as all vars are hoisted and set to undefined until the script is read
//         var firstName = 'John';
//         var yearOfBirth = 1990;

//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car'); // this works because you can console log outside if statement and within the same function
// }

// driversLicence5(true);

// //Block Scoped: ES6


// function driversLicence6(passedTest) {

//     //console.log(firstName); // this doesn't work at all can't use variable until it's declared due to temperal debt zone basically variables are hoisted but we still can't acess them until its declared.

//     let firstName;
//     const yearOfBirth = 1990; // have to declare let outside of if block so you can console.log outside of if block and have to declare name and value const outside of block to console.log outside

//     if (passedTest) {

//         firstName = 'John';

//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car');

// }

// driversLicence6(true);


// let i = 23;

// for (let i = 0; i < 5; i++) { // console.logs for loop I because its block scoped but also logs the I above
//     console.log(i);
// }




// //2. new way of creating IIFES using the concepts of block scoped a block can also be a curly brace



// { // this is an IIFFE very simple one

//     const a = 1;
//     letb = 2;
//     var c = 3;
// }

// //console.log(a + b); // creates error because variables are block scoped and not accessible from the outside
// console.log(c); // this is function scoped

// // es5  IIFFE

// (function() {
//     var c = 3;
// })();

// console.log(c); // not accessible from outside the ES5 IIFFE


// //3. Strings

// let firsNameString = 'John';
// let lastNameString = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {

//     return 2016 - year;

// }

// //ES5

// console.log('This is ' + firsNameString + ' ' + lastNameString + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');




// //ES6 Template literals
// console.log(`This is ${firsNameString} ${lastNameString}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} year old.`); // use backspace to open a template literals


// // new string methods

// const n = `${firsNameString} ${lastNameString}`;


// console.log(n.startsWith('J')); // logs true
// console.log(n.endsWith('th')); // logs true
// console.log(n.includes(' ')); // includes a space logs true
// console.log(`${firsNameString} `.repeat(5)); // repeats 5 times





// //4. Arrow Functions


// const years = [1990, 1965, 1982, 1937];



// //es5

// var ages5 = years.map(function(el) {

//     return 2016 - el;

// });

// console.log(ages5);


// // ES6

// let ages6 = years.map(el => 2016 - el); // this is the same as ES5 above simplest method

// console.log(ages6);

// let ages7 = years.map((el, index) => ` Age Element ${index + 1}: ${2016 - el}.`); // two arguments have to be wrapped in brackets with no return

// console.log(ages7);

// let ages8 = years.map((el, index) => { // if we add more lines of code we need to have a return statement
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return ` Age Element ${index + 1}: ${age}.`;
// });
// console.log(ages8);







// //4. Arrow Functions 2



// // Arrow functions : lexical THIS keyword biggest advantage is that they share the surrounding this keyword. Unlike normal functions arrow function don't get their own THIS keyword. They simply use
// // the this keyword of the function they are written in. So we say they have a LEXICAL THIS variable


// //ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this; // work around to have acess to box 5 object
//         document.querySelector('.green').addEventListener('click', function() { // this is a function attached to the method click me so this points to the window object
//             var str = ' This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };
// //box5.clickMe();



// //ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         // arrow function shares the lexical this keyword of its method always use arrow functions when you need to preserve the value of the THIS keyword
//         document.querySelector('.green').addEventListener('click', () => { // this is a function attached to the method click me so this points to the window object
//             var str = ' This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };
// //box6.clickMe();



// // // //be careful of changing the way THIS work
// // const box7 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: () => { // this does not work as it share the lexical scoping of its surroundings so the global THIS object
// // // arrow function shares the lexical this keyword of its method always use arrow functions when you need to preserve the value of the THIS keyword
// //         document.querySelector('.green').addEventListener('click',() => { // this is a function attached to the method click me so this points to the window object
// //             var str = ' This is box number ' + this.position + ' and it is ' + this.color;
// //             alert(str);
// //         });
// //     }
// // };
// // box7.clickMe();



// function Person(name) {
//     this.name = name;

// }

// //ES5
// Person.prototype.myFriends5 =
//     function(friends) {
//         // we have acess to person object THIS in here
//         var arr = friends.map(function(el) {
//             // but we don't have acess here due to scope so it points to the global object
//             return this.name + ' is friends ' + el;
//         }.bind(this)); // we have access her to this so we bind this to the function pass it to this function by creating new copy with this associated to it


//         console.log(arr);

//     };

// var friends = ['bob', 'jane', 'tom'];

// new Person('John').myFriends5(friends);


// //ES6


// Person.prototype.myFriends6 =
//     function(friends) {
//         // we have acess to person object THIS in here
//         var arr = friends.map(el =>
//            `${this.name} is friends with ${el};`);
//          // we have access her to this so we bind this to the function pass it to this function by creating new copy with this associated to it


//         console.log(arr);

//     };




// new Person('Robert').myFriends6(friends);



 //4. Destructuring gives us an easy way to extract data from a data structure like an object or an array



//ES5

// var john = ['John', 26 ];

// var name = john[0];

// var age = john[1];


//ES6 destructure a data structure

//Array
const [name,age] = ['john', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName,lastName} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName:b} = obj;

console.log(a);
console.log(b);

function calcAgeRetirement(year) { // good use of destructureing
    const age2 = new Date().getFullYear() - year;
    return [age2,65 - age2];
}


const [age2,retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);




//ES6 arrays new methods and loops



const boxes = document.querySelectorAll('.box'); // returns node list

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes); // converts boxes to an array allows us to use array methods

console.log(boxes);

console.log(boxesArr5);

boxesArr5.forEach( function(element) {
    element.style.backgroundColor = 'dodgerblue';
});


//ES6

const boxesArr6 = Array.from(boxes); // simply transforms a node list to array

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



// loop over array

//es5

// for (var i = 0; i < boxesArr5.length; i++) {
//  if (boxesArr5[i].className ==='box blue') {
//     continue; // this means that skip one step and go to next one
//  }

//  boxesArr5[i].textContent = 'i changed to blue';
// }


//ES6 the for of combines the parts of for each and for loop


for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue; // break stops the loops
    }
    cur.textContent = 'I changed to blue!';
}

// ES5


var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);



//ES6 FindIndex and Find methods of arrays


// FindIndex pass a callback function and then its going to return the index of the array of the callback function returns true

console.log(ages.findIndex(cur => cur >= 18)); // return the index for the element that returns true

console.log(ages.find(cur => cur >= 18)); // find and return the value of the element from the array based on the conditional statement.






 //4. The spread operator very convenient way to expand elements of array in function calls and arguments



function addFourAges (a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,38,12,21);

console.log(sum1);

//ES5

var ages = [18,38,12,21];


var sum2 = addFourAges.apply(null, ages); // apply allows us to use the ages array as the arguments in the fourages function

console.log(sum2);

//ES6

const sum3 = addFourAges(...ages); // spread operator ... allows us to use the values of an array as an argument it expands the array
console.log(sum3);



const familyAdam = ['John', 'Bob', 'Tom'];

const familySam = ['Rupert', 'Adam', 'Miles'];

const bigFamily = [...familyAdam, 'lily', ...familySam];

console.log(bigFamily);



















