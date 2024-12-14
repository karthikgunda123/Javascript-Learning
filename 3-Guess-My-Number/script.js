'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // for calculating the score. (Application state)

let highScore = 0; // for calculating high score of a game

// Event handler on Check Button
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);

    if (!guess) // If the number is not mentioned in the input
        document.querySelector('.message').textContent = '❌ No number!';
    else if (guess === secretNumber) // If the number is equal to the secret number
    {
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347'; // manipulating style using dom
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > secretNumber) // If the number is greater than the secret number
    {
        if (score > 1)
        {
            document.querySelector('.message').textContent = '📈 Too high';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) // If the number is less than the secret number
    {
        if (score > 1)
        {
            document.querySelector('.message').textContent = '📉 Too Low';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Restore Option Event Handler
document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})