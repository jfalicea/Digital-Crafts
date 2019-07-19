function hello(name) {
}
console.log('Hello, ' + name + '!');
// hello('Darth Carl');
// Hello you! Part 2
function hello2(name) {
    if (name) {
        console.log('Hello, ' + name + '!');
    } else {
        console.log('Hello, World!')
    }
}
// hello2('Darth Carl');
// hello2();
function hello2Alternative(name) {
    if (!name) {
        name = "World"
    }
    console.log('Hello, ' + name + '!');
}
// hello2Alternative('Darth Carl');
// hello2Alternative();
function madlib(name, subject) {
    // return name + '\'s favorite subject in school is ' + subject + '.';
    return `${name}'s favorite subject in school is ${subject}.`;
}
function tipAmount(bill, serviceLevel) {
    // #1 Initialize variables at the top.
    // Ideally, you are:
    // - setting them to some sensible default
    // - going to return one of them at the end of the function
    let tip = 0;
    // #2 Do some work/calculation using
    // the variables and argument values.
    if (serviceLevel === 'good') {
        tip = bill * 0.2;
    } else if (serviceLevel === 'fair') {
        tip = bill * 0.15;
    } else if (serviceLevel === 'bad') {
        tip = bill * 0.1;
    }
    // And then!
    // Return one of the variables you declared.
    return tip;
}
function totalAmount(bill, serviceLevel) {
    let total = 0;
    if (serviceLevel === 'good') {
        total = bill + (bill * 0.2);
    } else if (serviceLevel === 'fair') {
        total = bill + (bill * 0.15);
    } else if (serviceLevel === 'bad') {
        total = bill + (bill * 0.1);
    } else {
        total = bill;
    }
    return total;
}
function fancyTotalAmount(bill, serviceLevel) {
    let total = bill; // default to the amount of the bill
    const tipAmounts = { // hold the tip percentages in a dictionary
        good: 0.2,
        fair: 0.15,
        bad: 0.1
    };
    // Only do the calculation if there's a value for serviceLevel
    if (serviceLevel in tipAmounts) {
        total = bill + (bill * tipAmounts[serviceLevel]);
    }
    // Done! Return total.
    // Even if nothing (or garbage) was passed in for serviceLevel,
    // we're still returning a sensible value.
    return total;
}

function totalAmount2(bill, serviceLevel) {
    return bill + tipAmount(bill, serviceLevel);
}
function fancyTipAmount(bill, serviceLevel) {
    let tip = 0;
    const tipAmounts = { // hold the tip percentages in a dictionary
        good: 0.2,
        fair: 0.15,
        bad: 0.1
    };
    if (serviceLevel in tipAmounts) {
        tip = bill * tipAmounts[serviceLevel];
    }
    return tip;
}
function superFancyTotalAmount(bill, serviceLevel) {
    return bill + fancyTipAmount(bill, serviceLevel);
}
function splitAmount(bill, serviceLevel, numPeeps) {
    return fancyTotalAmount(bill, serviceLevel) / numPeeps;
}


function fancyTotalAmount(bill, serviceLevel) {
    let total = bill; // default to the amount of the bill
    const tipAmounts = { // hold the tip percentages in a dictionary
        good: 0.2,
        fair: 0.15,
        bad: 0.1
    };
    // Only do the calculation if there's a value for serviceLevel
    if (serviceLevel in tipAmounts) {
        total = bill + (bill * tipAmounts[serviceLevel]);
    }
    // Done! Return total.
    // Even if nothing (or garbage) was passed in for serviceLevel,
    // we're still returning a sensible value.
    return total;
}
function totalAmount2(bill, serviceLevel) {
    return bill + tipAmount(bill, serviceLevel);
}
function fancyTipAmount(bill, serviceLevel) {
    let tip = 0;
    const tipAmounts = { // hold the tip percentages in a dictionary
        good: 0.2,
        fair: 0.15,
        bad: 0.1
    };
    if (serviceLevel in tipAmounts) {
        tip = bill * tipAmounts[serviceLevel];
    }
    return tip;
}
function superFancyTotalAmount(bill, serviceLevel) {
    return bill + fancyTipAmount(bill, serviceLevel);
}
function splitAmount(bill, serviceLevel, numPeeps) {
    return fancyTotalAmount(bill, serviceLevel) / numPeeps;
}