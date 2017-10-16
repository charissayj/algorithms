//contructor functions from udemy js data structures
//what is a constructor function and what does it do?
//A constructor is a function that creates and object class and allows you to 
//create multiple instances of that class
//allows you to create multiple objects

//facebook - 
//has many users that are all objects of the same class and have to same properties
//user constructor function:
function User(firstName, lastName, age, gender){
    this.firstName = firstName; //first name object is equal to the first name param
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

var user1 = new User('Charissa', 'Johnson', 27, 'female');
var user2 = new User('Tashi', 'Johnson', 5, 'female');
var user200 = new User('Jill', 'Stien', 34, 'non binary');

console.log(user1);
console.log(user2);
console.log(user200);