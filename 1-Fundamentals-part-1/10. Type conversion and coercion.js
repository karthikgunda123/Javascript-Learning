// Type conversion and coercion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('karthik'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
