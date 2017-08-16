var person = {
    firstname: 'John',
    getFullName: function() {
        return this.firstname;
    }
}

var logName = function() {
    console.log(this); // this is window
    console.log('Logged: ' + this.getFullName());
}.bind(person);

var logPersonName = logName.bind(person);

//logName();
logPersonName();

// function borrowing
var person2 = {
    firstname: 'Jane'
};

console.log(person.getFullName.call(person2));


// function currying
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);

console.log(multipleByTwo(8));