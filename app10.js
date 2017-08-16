function greetStatement() {
    var greeting = 'Hi from fn statement!';
    console.log(greeting);
    console.log(this + '\n------');
    function hey() {
        console.log('hey');
        console.log(this + '\n------');
    }
    hey();
}

greetStatement();

var greetExpression = function() {
    var greeting = 'Hi from fn expression!';
    console.log(greeting);
    console.log(this + '\n------');
};

greetExpression();

console.log(greeting);
console.log(this + '\n------');

(function() {
    console.log('IIFE');
    console.log(this + '\n------');
}());