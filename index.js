// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example test cases:
const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(driversArray, 'Bobby')); 
console.log(findMatching(driversArray, 'Sammy')); 
console.log(findMatching(driversArray, 'Susan'));

console.log(fuzzyMatch(driversArray, 'Sa')); 
console.log(fuzzyMatch(driversArray, 'y'));

const driversObjectArray = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
];
console.log(matchName(driversObjectArray, 'Bobby'));
// [
//   { name: 'Bobby', hometown: 'Pittsburgh' },
//   { name: 'Bobby', hometown: 'Tampa Bay' }
// ]

