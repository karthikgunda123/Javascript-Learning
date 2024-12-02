// Truthy and Falsy Values

// 5 Falsy Values: 0, '', undefined, null, NaN
// everything else are truthy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Karthik'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(2));

const money = 100;

if (money)
{
    console.log(`Don't spend it all;`);
}
else
{
    console.log(`You should get a job!`);
}

let height;

if (height)
    console.log('YAY! height is defined');
else
    console.log('Height is undefined.');