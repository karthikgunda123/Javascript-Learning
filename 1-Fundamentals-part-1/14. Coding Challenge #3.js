////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Test Data: 1
const dolphinGame1 = 96;
const dolphinGame2 = 108;
const dolphinGame3 = 89;

const dolphinsAverage = (dolphinGame1 + dolphinGame2 + dolphinGame3) / 3;

const koalasGame1 = 88;
const koalasGame2 = 91;
const koalasGame3 = 110;

const koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage)
    console.log('Dolphins won the game.')
else if (koalasAverage > dolphinsAverage)
    console.log('Koalas won the game.')
else
    console.log('Both win the trophy');

// BONUS: 1
const dolphinGameB1 = 97;
const dolphinGameB2 = 112;
const dolphinGameB3 = 101;

const dolphinsAverageB = (dolphinGameB1 + dolphinGameB2 + dolphinGameB3) / 3;

const koalasGameB1 = 109;
const koalasGameB2 = 95;
const koalasGameB3 = 123;

const koalasAverageB = (koalasGameB1 + koalasGameB2 + koalasGameB3) / 3;

console.log(dolphinsAverageB, koalasAverageB);

if (dolphinsAverageB > koalasAverageB && dolphinsAverageB >= 100)
    console.log('Dolphins won the game.')
else if (koalasAverageB > dolphinsAverageB && koalasAverageB >= 100)
    console.log('Koalas won the game.')
else
    console.log('Both win the trophy');

// BONUS: 2
const dolphinGameBB1 = 97;
const dolphinGameBB2 = 112;
const dolphinGameBB3 = 80;

const dolphinsAverageBB = (dolphinGameBB1 + dolphinGameBB2 + dolphinGameBB3) / 3;

const koalasGameBB1 = 109;
const koalasGameBB2 = 95;
const koalasGameBB3 = 50;

const koalasAverageBB = (koalasGameBB1 + koalasGameBB2 + koalasGameBB3) / 3;

console.log(dolphinsAverageBB, koalasAverageBB);

if (dolphinsAverageBB > koalasAverageBB && dolphinsAverageBB >= 100)
    console.log('Dolphins won the game.')
else if (koalasAverageBB > dolphinsAverageBB && koalasAverageBB >= 100)
    console.log('Koalas won the game.')
else
{
    if (koalasAverageBB >= 100 && dolphinsAverageBB >= 100)
        console.log('Both win the trophy');
    else
        console.log("No one wins trophy");
}