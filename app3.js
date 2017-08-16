/*var person = new Object();

person["firstname"] = "Tony"; // the firstname property

var firstNameProperty = "firstname";

console.log(person[firstNameProperty]);
console.log(person.firstname);*/

var person = {
    firstname: "Tony",
    address: {
        street: "111 Main St."
    }
};

function greet(user) {
    console.log('Hi ' + user.firstname);
}

greet(person);