// Looping Backwards and Loops in Loops

const karthikArray = [
    'Gunda',
    'Karthik',
    2037 - 2002,
    'student',
    ['Micheal', 'Peter', 'Steven'],
    true
];

// 0, 1, 2, 3, 4, 5
// 5, 4, 3, 2, 1, 0

for (let i = karthikArray.length - 1; i >= 0; i--)
{
    console.log(i, karthikArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++)
{
    console.log(`-----Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++)
    {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}