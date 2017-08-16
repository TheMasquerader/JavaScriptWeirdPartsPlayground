// function statement - gets put into memory during the creation phase of the execution context
function greet(name) {
    console.log('Hello ' + name);
}

greet(); // the function gets invoked

// using a function expression - the function doesn't get put into memory during the creation phase, but is created on the fly during the execution phase
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
// invoke it using a variable that's pointing at that location in memory
greetFunc();

// using an Immediately invoked function expression
var greeting = function(name) {
    console.log('Hello ' + name);
}(); // invoke function at the point where I create it

(function(name) {
    console.log('Hi ' + name);
}('Fur')); // parenthesis is a grouping operator, only used with expressions