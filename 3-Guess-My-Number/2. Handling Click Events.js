// Handling Click Events
document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);

    if (!guess)
    {
        document.querySelector('.message').textContent = 'No number!';
    }
});
