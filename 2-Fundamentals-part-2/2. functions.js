// functions

function logger()
{
    console.log('My Name is Jonas');
}

// calling or running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

    // return `Juice with ${apples} apples and ${oranges} oranges.`;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const number = Number('23');
console.log(number);