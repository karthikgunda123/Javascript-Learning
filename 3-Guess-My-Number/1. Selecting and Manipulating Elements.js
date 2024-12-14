// Selecting and Manipulating Elements

// getting the text content of a html element
console.log(document.querySelector('.message').textContent);

// What is DOM

// Setting the content of an element
document.querySelector('.message').textContent = "Correct Number !";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);