// Test 2 - access before defined. Not recommended.
//b(); // Available even if defined below.
//console.log(a); // Available, but undefined.

// Test 3 - comment out the declaration for 'a'. Error.
var a = 'Hello World!';

function b() {
    console.log('Called b.');
}

// Test 1 - all is nice.
b();
console.log(a);