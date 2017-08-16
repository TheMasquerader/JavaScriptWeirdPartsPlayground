greet();

function greet() {
    console.log('Hi! ' + greet.language);
}

greet.language = 'English';

//greet();
console.log(greet.language);

//anonymousGreet();

// Function expression.
// The var looks for the function address.
var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet(); // Invokes the code in the anonymous function that the var points to.

function log(a) {
    console.log(a);
    //a();
}

log({
    greeting: 'Hi!'
});

log(function() {
   console.log('Wow!'); 
});