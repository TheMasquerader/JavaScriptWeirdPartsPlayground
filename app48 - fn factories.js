// 48. Function Factories

function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language == 'en') {
            // etc
        } else if (language == 'es') {
            // etc
        }
    }
}

var greetEn = makeGreeting('en');
var greetEs = makeGreeting('es');

greetEn('Johnny', 'B');