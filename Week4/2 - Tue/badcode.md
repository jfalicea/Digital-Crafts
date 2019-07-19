# Bad Code

Below is an example of refactoring bad code into good code.

In all the code below we will refer to this `data` array:

```javascript
var data = [
    {firstName: "Jerry", lastName: "Johnson", age: 32, income: 54000},
    {firstName: "Emily", lastName: "Perkins", age: 23, income: 65000},
    {firstName: "Ben", lastName: "Chambers", age: 21, income: 40000},
    {firstName: "Natalie", lastName: "Hikes", age: 26, income: 45000},
    {firstName: "Sam", lastName: "Reynolds", age: 22, income: 37000},
    {firstName: "Harry", lastName: "Knight", age: 31, income: 31000},
];

```

```javascript

var over25 = [];
for( i = 0; i < arr.length; i++; ) {
    var current = data[i];
    if ( current.age > 25 ) {
        over25.push( current );
    }
}

```

So while this code works, there are a number of `micro-optimizations` to make.

## Too many calculations

So to execute the code above, the javascript engine will make and declare a variable called `i`.  It then needs to calculate the length of `arr`.  Then, it must check to see if `i` is less than `arr.length`.  If it is, then it will continue to execute the loop code. *Rinse*, *repeat*.

Why is this bad? For one, why are we making the javascript engine figure out the length of `arr` every time through the loop? If we were to go ahead and declare the variable and set it to the length, the the JavaScript engine doesn't have to.

```javascript

var over25 = [];
var i=0, len = arr.length;
for(; i < len; i++; ) {
    var current = data[i];
    if ( current.age > 25 ) {
        over25.push( current );
    }
}

```

So now, the engine no longer has to calculate the array length every time through the loop. That's not the end of the world but why make the browser work harder than it has to?

The other thing this script is doing is incrementing `i` each time through the loop and comparing it to the length of the array.  What if we could remove that from the code as well?  You can.

## forEach

Arrays have a built in `forEach` method.  This is basically a buil-in `for` loop.

```javascript

var over25 = [];

data.forEach(item, index) {
    if ( item.age > 25 ) {
        over25.push( item );
    }
}

```

In this example, no additional variables are needed. The `forEach` method has two parameters: the `item` and the `index`.  The `item` is the data and the `index` is the same as our `i` variable from the `for` loop ( _not used in this example_ ).

## For vs while

Another way to simplify this is convert to using a `while` loop.  A `while` loop is also simple: as long as the condition is `truthy`, it will continue to execute. As soon as it is no longer `truthy` it exits the loop.  So one test that returns `true` or `false`.  Sounds like exactly what we need.

Since the array isn't sorted, it _does not matter_ if we start at the beginning or the end of the array.  Also, if we start at the end of the array instead of the beginning, the last index will always be `0`, which is a `falsey` value, and our loop will _automatically_ exit.

```javascript

var over25 = [];
var len = arr.length;

while (len--)
    var current = data[len];
    if ( current.age > 25 ) {
        over25.push( current );
    }
    // ( current.age > 25 ) && over25.push(current)
}

```

## The Right Way

OK, now that that is out of the way... *Don't use any of the ways above*!  :-)

The correct way is to use the Arrays built-in `filter` method.  It is designed to take an array and return a subset of that array that matches a given condition.

In our example our filter is that the `age` is greater than 25.  So we create that as a filter function (_called a `reducer`_) and apply it using the `filter` method.

```javascript

function moreThan25YearsOld(item, index) {
    // !! forces the value to be converted to a Boolean (not necessary but it clarifies your intent)
    return !!(item.age > 25);
}

var over25 = data.filter( moreThan25YearsOld );

```

Array `filter`s are also chainable. You could add additional filters ( _or other array methods_ ) after the first one. Like this example:

```javascript

var d = data.filter( moreThan25YearsOld ).filter( lessThan40YearsOld ).filter( incomeAbove40K );

```

And there you have it, an entire loop (_including creating a new array_ ), recreated as one line of code.
