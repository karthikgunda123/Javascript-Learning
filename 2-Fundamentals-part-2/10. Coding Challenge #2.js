///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calculateTip = (bill) => {
    let tip = 0;
    if (bill >= 50 && bill <= 300)
        tip = 15;
    else
        tip = 20;
    return (bill * tip) / 100;
}

const bills = [125, 555, 44];

const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
console.log(bills, tips);

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// const totalBill = bills + tips; // it will merge as a strings so useless.
console.log(totalBill);