
// Create a new execution context with an Immediately Invoked Function Expression.
// Start with ';' to make sure any code placed above is forced to finish properly.
;(function(global, $){
    
    // Trick borrowed from jQuery so we don't have to use the 'new' keyword when actually using Greetr.
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };
    
    // Not exposed outside the IIFE, but available inside it because it's the same lexical environment + closures.
    var supportedLangs = ['en', 'es'];
    
    // Using objects instead of arrays so that we can access them via the name-value pair -> the name of the properties, i.e. greetings['en'].
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };
    
    Greetr.prototype = {
        // We'll add all the methods we want our Greetr to have.
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        greeting: function() {
            return greetings[this.language] + ', '+ this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '!';
        },
        
        greet: function(isFormal) {
            this.getGreeting(isFormal);
            return this; // chainable
        },
        
        getGreeting: function(isFormal) {
            var msg;
            
            if (isFormal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            return msg;
        },
        
        log: function() {
            // Internet Explorer doesn't have 'console' available unless the console is open.
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },
        
        setLang: function(newLang) {
            this.language = newLang || this.language;
            this.validate();
            return this;
        },
        
        updateGreetingHTML: function(selector, isFormal) {
            if (!$) {
                throw 'jQuery not loaded!';
            }         
            if (!selector) {
                throw 'Missing selector!';
            }
            var msg = this.getGreeting(isFormal);
            // TODO: validate selection results.
            $(selector).html(msg);
            
            return this;
        }
    };
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        
        self.firstName = firstName || 'First name';
        self.lastName = lastName || 'Last name';
        self.language = language || 'en';
        
        self.validate();
        
        //return self;
    };
    
    // We want any objects created with the init method to have their prototype pointing at the Greetr prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Attach our Greetr to the global object and add a shorthand alias while at it.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));