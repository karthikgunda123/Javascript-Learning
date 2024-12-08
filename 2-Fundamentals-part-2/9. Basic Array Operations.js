// Basic Array Operations

// Adding elements
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

friends.push('Jay'); // adding at the end of array
console.log(friends);

const newLength = friends.push('karthik');
console.log(friends, newLength);

friends.unshift('John'); // also returns new length
console.log(friends);


// Removing Elements
friends.pop(); // remove last element
const lastFriend = friends.pop();
console.log(friends, lastFriend);

const firstFriend = friends.shift(); // remove first element
console.log(friends, firstFriend);

console.log(friends.indexOf('Steven')); // returns the index of an element
console.log(friends.indexOf('steven')); // -1 for not found

console.log(friends.includes('Steven')); // returns true or false based on the search element
console.log(friends.includes('steven')); // returns false if not present

friends.push(23);
console.log(friends.includes('23')); // strict comparison so false;
console.log(friends.includes(23));

if (friends.includes('Steven'))
    console.log('You have a friend called Steven');