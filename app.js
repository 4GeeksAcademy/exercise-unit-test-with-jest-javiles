let oneEuroIs = {
    "JPY": 156.5,  // 1 Euro = 156.5 Yenes
    "USD": 1.07,   // 1 Euro = 1.07 Dólares
    "GBP": 0.87,   // 1 Euro = 0.87 Libras
};

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
 
    let valueInYen = (valueInDollar / oneEuroIs.USD)*(oneEuroIs.JPY);
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
   
    let valueInPound = (valueInYen / oneEuroIs.GBP)*(oneEuroIs.JPY);
    return valueInPound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };