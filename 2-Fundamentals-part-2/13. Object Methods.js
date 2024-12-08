// Object Methods

const karthikObject = {
    firstName: 'Gunda',
    lastName: 'Karthik',
    birthYear: 2002,
    job: 'Student',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calculateAge: function (birthYear)
    // {
    //     return 2037 - birthYear;
    // }
    // calculateAge: function()
    // {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calculateAge: function()
    {
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function ()
    {
        return `${this.firstName} is a ${this.calculateAge()}-years ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
};
console.log(karthikObject);

// console.log(karthikObject.calculateAge(1991));
// console.log(karthikObject['calculateAge'](1991));

console.log(karthikObject.calculateAge());
console.log(karthikObject['calculateAge']());
console.log(karthikObject.age);
console.log(karthikObject.age);

// Challenge
// Karthik is a 35-year-old student, and he has drivers-license

console.log(karthikObject.getSummary());