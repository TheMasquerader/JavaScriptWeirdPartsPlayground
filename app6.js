function a() {
    console.log(this); // this - the window (the global object) when simply invoking the function.
    this.newvar = 'hello';
}


var b = function() {
    console.log(this); // this - global object
}
a();

console.log(newvar);

var c = {
    name: 'The c object', // property
    log: function() { // method
        var self = this;
        
        self.name = 'Update c object';
        console.log(self); 
        
        var setname = function(newname) {
            //this.name = newname; // this is the global object here :|
            self.name = newname;
        };
        
        setname('Updated again c object');
        console.log(self);
    }
};

c.log();