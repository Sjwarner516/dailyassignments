// Problem 1 
// Create an array in the myFirstArray variable
// At the 0 index put the number 4 there.
// At the 1st index put the number 8 there.
// In the addUp variable access each number in the array and add them together.


let myFirstArray = [4, 8];
let addUp = myFirstArray[0] + myFirstArray[1];



// Problem 2
// Now push the value in addUp to the end of myFirstArray array.
// (it will be at the 2nd index)
myFirstArray.push(addUp);


// Problem 3
// We no longer want what is in the 0 index of the array.
// Use the built in array function to take out the value in the 0th index.

myFirstArray.shift();

// Problem 4
// Add the two items in the array together into the addAgain variable

let addAgain = myFirstArray[0] + myFirstArray[1];


// Problem 5
// Create a new array with 10 different items in it.
// To find the length of how many items are in an array
// you can type the array variable name with .length at the end.
// myArray.length will return 2.
// Put the length of the array in the arrLength variable.

let newArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
let arrLength = newArray.length