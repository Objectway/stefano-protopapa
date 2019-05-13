myApp
    .filter('mtrCurrency', function() {
    return function(val) {
        
        let number = parseFloat(val).toFixed(2)

        return number + " €";
    };
    })