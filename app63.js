// 63 - Object.create

//-- polyfill for lack of Object.create (older browsers)
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create only accepts one param.');
        }
        function F() {}
        F.prototype = o;
        return new F();
        
        // returns a new function with the param as the prototype
    };
}

//-- end polyfill

var person = {
    firstname: 'Default f-n',
    lastname: 'Default l-n',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
//john.getFullName();
console.log(john);