// String and Template literals

const firstName = "Gunda";
const job = "Student";
const birthYear = 2002;
const year = 2036;

const karthik = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(karthik);

const karthikNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(karthikNew);

console.log('Just a regular string...');

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);