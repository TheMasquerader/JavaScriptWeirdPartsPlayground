var person = {
    firstname: 'Default f-n',
    lastname: 'Default l-n',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// grabs properties on the object AND its prototype
for (var prop in john) {
    if (john.hasOwnProperty(prop)) { // now it skips prototype properties
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

_.extend(john, jane);

console.log(john);