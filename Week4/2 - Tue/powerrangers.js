const powerRangers = ['Jason', 'Billy', 'Trini', 'Zack', 'Kim']
powerRangers.push('Tommy');

console.log(powerRangers);

const greenRanger = powerRangers.pop();
console.log(greenRanger);
console.log(powerRangers);

const powerRangersSeason2 = [...powerRangers, 'Aquitar Rangers'];
console.log(powerRangersSeason2);

const redRanger = powerRangersSeason2.shift();
console.log(redRanger);
console.log(powerRangersSeason2);