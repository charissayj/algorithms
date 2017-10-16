//prototype object is an object that multiple other objects can refer to

function User(firstName, lastName, age, gender){ //constructor function
    this.firstName = firstName; //first name object is equal to the first name param
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

User.prototype.emailDomain = '@facebook.com';
User.prototype.getEmailAddress = function(){
    return this.firstName + '.' + this.lastName + this.emailDomain;
}

var user1 = new User('Charissa', 'Johnson', 27, 'female');
var user2 = new User('Tashi', 'Johnson', 5, 'female');
var user200 = new User('Jill', 'Stien', 34, 'non binary');

console.log(user200.getEmailAddress());

// console.log(user1);
// console.log(user2);
// console.log(user200);