// Problem 1
// Use the filter function on the array below.
// We only want an array that has numbers that are greater than 5 and less than 11
// Assign the result array to myArray

let myArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];
function filterMyArray() {
const myArray2=  myArray.filter(function(item){
    return item<11&&item>5;
}); 
myArray = myArray2;

}

// Problem 2
// Use the forEach function on the array below
// We want to take each item in the array and multiply it by 5;

let multiplyArray = [1, 11, 7, 3, 8, 2, 3, 2, 10, 3, 6, 2, 5];

function multiplyNumbers() {
  multiplyArray.forEach(multiplyArrayNumbers);
    
}

function multiplyArrayNumbers(item, index, arr) {
  arr[index] = item * 5;
  
} 
