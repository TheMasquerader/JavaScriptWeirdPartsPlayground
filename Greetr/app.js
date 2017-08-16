var g = G$('John', 'James');
g.setLang('es').greet(true);
//console.log(g);

// The 'click' param is a function object that I create on the fly with a function expression.
$('#login').click(function() {
    console.log('Clicked the login button.');
    
    var loginGreetr = G$('John', 'James');
    
    $('#logindiv').hide();
    loginGreetr.setLang($('#lang').val()).updateGreetingHTML('#greeting', true).log();
});