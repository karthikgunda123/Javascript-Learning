// Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

let friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const y = new Array(1991, 1992, 1994, 1996);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; // error

const firstName = 'Gunda';
let jonas = [firstName, 'karthik', 2037 - 2002, 'Student', friends];

console.log(jonas);
console.log(jonas.length);

// Exercise
const calculateAge = function (birthYear)
{
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calculateAge(years));

const age1 = calculateAge(years[0]);
const age2 = calculateAge(years[1]);
const age3 = calculateAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calculateAge(years[0]), calculateAge(years[1]), calculateAge(years[years.length - 1])];
console.log(ages);