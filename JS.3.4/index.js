// Problem 1
// Create a function called circleArea.
// This function will take one parameter which will be a radius.
// Return the area of the circle based on the radius.
// area is 3.14 * r^2
function circleArea (radius){
    answer=3.14 * radius * radius;
    return answer;
}




// Problem 2
// Create a function called circleCircumference.
// This function will take one parameter which will be a radius.
// Return the circumference of the circle based on the radius.
// circumference is 2 * 3.14 * radius
function circleCircumference (radius){
    answer= 2 * 3.14 * radius;
    return answer;
}





// Problem 3
// Create a function called average.
// This function will take three parameters which will be numbers.
// Find the average of these numbers and return the value.
function average (number1, number2, number3){
    answer = (number1+number2+number3) / 3;
    return answer;
}

// Problem 4
// Create a function called combineTwoStrings.
// This function will take two parameters.
// return both of the strings concatenated(combined)
function combineTwoStrings (one,two){
    answer = one + two;
    return answer;
}
    


// Problem 5
// Create a function called cubed.
// This function will take one parameter.
// Return the cubed number that is given from the parameter.
function cubed (anynumber){
    answer= anynumber * anynumber * anynumber;
    return answer;
}



// Problem 6
// Create a function called squared.
// This function will take one parameter.
// Return the squared number that is given from the parameter.
function squared (anynumber){
    answer=anynumber * anynumber;
    return answer;
}



// Problem 7
// Create a function called sphereArea.
// This function will take one parameter which will be the radius.
// Find the surface area given the radius 4 * 3.14 * r^2
// Use your squared function to find the squared radius.
function sphereArea (radius){
    answer=4*3.14* squared(radius);
    return answer;

}

