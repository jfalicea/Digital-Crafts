const data = [
    {firstName: "Jerry", lastName: "Johnson", age: 32, income: 54000},
    {firstName: "Emily", lastName: "Perkins", age: 23, income: 65000},
    {firstName: "Ben", lastName: "Chambers", age: 21, income: 40000},
    {firstName: "Natalie", lastName: "Hikes", age: 26, income: 45000},
    {firstName: "Sam", lastName: "Reynolds", age: 22, income: 37000},
    {firstName: "Harry", lastName: "Knight", age: 31, income: 31000},
];

const updated = data.filter( 
    person => person.income > 32000 && person.income < 50000
).map( 
    person => ({ ...person, fullName: `${person.firstName} ${person.lastName}` })
);

console.log(data);
console.log(updated);