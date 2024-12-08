// Functions calling other functions

function cutFruitPieces(fruit)
{
    return fruit * 4;
}

function fruitProcessor(apples, oranges)
{
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

const juice = fruitProcessor(2, 3);
console.log(juice);