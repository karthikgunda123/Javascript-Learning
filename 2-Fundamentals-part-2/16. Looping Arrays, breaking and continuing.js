// Looping Arrays, breaking and continuing

const karthikArray = [
    'Gunda',
    'Karthik',
    2037 - 2002,
    'student',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

console.log(karthikArray[0]);
console.log(karthikArray[1]);
//...
console.log(karthikArray[karthikArray.length - 1]);

// karthikArray[6] does not exist

for (let i = 0; i < karthikArray.length; i++)
{
    // Reading from karthik array
    console.log(karthikArray[i], typeof karthikArray[i]);

    // Filling types array
    // types[i] = typeof karthikArray[i];
    types.push(typeof karthikArray[i]);
}

console.log(types);

const years = [1992, 1994, 1996, 1998, 2000];
const ages = []

for (let i = 0; i < years.length; i++)
{
    const age = 2037 - years[i];
    ages.push(age);
}

console.log(ages);

// break and continue

for (let i = 0; i < karthikArray.length; i++)
{
    if (typeof karthikArray[i] !== 'string')
        continue;

    console.log(karthikArray[i], typeof karthikArray[i]);
}

for (let i = 0; i < karthikArray.length; i++)
{
    if (typeof karthikArray[i] === 'number')
        break;

    console.log(karthikArray[i], typeof karthikArray[i]);
}