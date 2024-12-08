// Dot vs Bracket Notation

const karthikObject = {
    firstName: 'Gunda',
    lastName: 'Karthik',
    age: 2037 - 2002,
    job: 'Student',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(karthikObject);

console.log(karthikObject.lastName);
console.log(karthikObject['lastName']); // In Brackets, we can insert expressions

const nameKey = 'Name';
console.log(karthikObject['first' + nameKey]);
console.log(karthikObject['last' + nameKey]);

// console.log(karthikObject.'last' + nameKey); // error cannot possible in dot notation

const interestedIn = prompt('What do you want to know about Karthik? Choose between firstName, lastName, age, job and friends');
console.log(interestedIn);

console.log(karthikObject.interestedIn); // karthikObject doesn't have interestedIn property

console.log(karthikObject[interestedIn]);

if (karthikObject[interestedIn])
    console.log(karthikObject[interestedIn]);
else
    console.log('Wrong request!');

karthikObject.location = 'India'; // adding property using dot notation
karthikObject['Email'] = 'gundakarthik644@gmail.com'; // adding property using bracket notation
console.log(karthikObject);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${karthikObject.firstName} has ${karthikObject.friends.length} friends, and his best friend is called ${karthikObject.friends[0]}`);