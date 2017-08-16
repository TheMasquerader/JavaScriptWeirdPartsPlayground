// by value (primitives)

var a = 3;
var b;

b = a;
a = 4;

console.log("a is " + a + ", b is " + b);

// by reference (all objects, including functions)

var c = {
    greeting: "Hi"
};
var d;

d = c; // Points d at the same address as c.

c.greeting = "Hello"; // mutate object c

console.log(d);
