// CLOSURES

function greetc(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

//greetc('Hmm')('JS');

var sayHi = greetc('Hmm');
sayHi('JS'); // <-- how does the sayHi fn know the value of the whattosay var?! - CLOSURE - JS engine feature

// Example 2
function buildFunctions() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        //let hey = i; // coming in ES6
        arr.push(
            function() {  
                console.log(i); // doesn't get executed when creating the array, i.e. running buildFunctions
            }
        );
    }
    return arr;
}

var fs = buildFunctions();
//fs[0]();
//fs[1]();
//fs[2](); // outputs 3 every time

// Example 2mine
function buildFunctionsMine() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        var hey = i + 'h';
        arr.push(
        {
            val: hey,
            fn: function() { 
                console.log(i); // doesn't get executed when creating the array, i.e. running buildFunctions
                console.log(this.val + '\n---');
            }
        }
        );
    }
    return arr;
}

var fsMine = buildFunctionsMine();
//fsMine[0].fn();
//fsMine[1].fn();
//fsMine[2].fn(); // outputs 0, 1, 2

// Example 3

function buildFunctions2() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                // We need to return a fn instead of just calling console.log so that we can keep the same form fs2[0]();
                return function() {
                    console.log(j);
                }
            }(i))
            // every time the loop runs it's going to execute this function (IIFE), ergo it will create a new execution context and j will be stored in each of those execution contexts!!!
        );
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();