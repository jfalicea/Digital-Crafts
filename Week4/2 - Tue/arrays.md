# Array Methods

A look at the built-in `array` methods.

## Filter

The `filter` method is used when you want to remove items from the array. You pass it a `reducer` function and it will remove the unwanted items from the array. The `filter` method always returns a new array and is non-destructive.

```javascript
const data = [1, 24, 76, 912, 234, 68, 352, 412];
function greaterThan100(item) {
    return item > 100;
}
const filteredData = data.filter(greaterThan100);
//912,234,352,412
```

## Map

The `map` method is used to create a new array based on the data in an existing array. This is really useful when you have an array that you want to simplify the structure.

Given the following array:

```javascript
const data = [
    { firtName: 'Gary', lastName: 'Storey', id: 'gstorey' },
    { firtName: 'Andrew', lastName: 'Frost', id: 'afrost' },
    { firtName: 'Sabrina', lastName: 'Faragoza', id: 'sfaragoza' },
    { firtName: 'Jake', lastName: 'Weaver', id: 'jweaver' }
];
```

Let's say we only wanted a combined _fullName_ field. We can write a `reducer` function that will do this using map:

```javascript
function updateItem(item) {
    return { fullName: item.firstName + ' ' + item.lastName };
}
const updatedData = data.map(updateItem);
// { fullName:'Gary Storey'}, { fullName:'Andrew Frost'}, etc
```

## Sort

The `sort` method allows you to sort an array. By default, this will only work well with numbers and, to a certain extent, strings.
Otherwise, you will want to supply your own custom sort function.

Here is an example of sorting an array of numbers:

```javascript
const data = [10, 234, 65, 53, 127, 5, 423];
const sortedData = data.sort();
// 5,10,53,65,127,234,423
const resortedData = sortedData.sort();
// 423,234,127,65,53,10,5
```

If you want to do something more complex, you can supply a `reducer` function. This is simply a function, that will be used to sort the given data. When dealing with JavaScript objects, you will almost always have to supply your own function.

```javascript
const data = [
    { name: 'Gary', age: 25 },
    { name: 'Jennifer', age: 21 },
    { name: 'Jason', age: 32 },
    { name: 'Amy', age: 27 }
];

const sortByAge = (a, b) => a.age < b.age;
const d = data.sort(sortByAge);
// { name: 'Jennifer', age:21 },
// { name: 'Gary', age:25 },
// { name: 'Amy', age:27 }
// { name: 'Jason', age:32 }
```

## Reverse

A seldom used method, `reverse` will does exactly what you think it does. It reverses the array. This method is great to use when you already have a sorted array. If you have an array sorted in ascending order, use this to quickly switch to descending order.

Using the example above, instead of calling the `sort` method twice, we could `sort`, then `reverse`.

```javascript
const data = [10, 234, 65, 53, 127, 5, 423];
const sortedData = data.sort();
// 5,10,53,65,127,234,423
const reversedData = sortedData.reverse();
// 423,234,127,65,53,10,5
```

Although, this is an array method, it can also be useful when dealing with strings. For example, you could do this:

```javascript
const str = 'This is my string';
const reversedStr = str
    .split('')
    .reverse()
    .join('');
//gnirts ym si sihT
```

## Concat

The `concat` method is used to combine two or more arrays into a single array.

```javascript
const a = ['a','b','c'];
const b = [1,2,3];
const combined - a.concat(b);
// 'a','b','c',1,2,3
```

## Some Additional Utility Functions

Other libraries, like [lodash](https://lodash.com/), add some nice array utility methods.
A couple of useful ones are `pluck` and `unique`. These method will both return a new array and do not mutate the original array.

`pluck` is useful when working with an array of JavaScript objects. It takes two parameters: the `array` to use and a `string` which is the name of one of the properties of the object. It returns an array of just that property.

`unique` is used to return the unique records in an array.

```javascript
/*ES6*/
const pluck = (arr, field) => arr.map(item => item[field]);
const unique = arr => [...new Set(arr)];

/*ES5*/
var pluck = function(arr, type) {
    return arr.map(function(element) {
        return element[type];
    });
};

var unqiue = function(arr) {
    var types = {};
    arr.forEach(function(el) {
        types[el] = true;
    });
    return Object.keys(types);
};
```
