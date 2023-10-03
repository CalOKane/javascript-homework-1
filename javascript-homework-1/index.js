//Create a javascript file which shows an example of the following key javascript syntax
//
//1. In a series of variables store:
//a.       A string
//b.       A number
//c.       A Boolean
//
//2. Add two numbers
//
//3. Concatenate two string
//
//4. Create an IF statement which checks if a variable matches another variable, if so it should console log a message
//
//5. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails
//
//6. Extend one of the IF statements to check if two things are true, if so show a message
//
//7. Convert the IF statement to a Switch statement
//
//8.  Store name, age and height in an Object
//
//9. Create a FOR loop that shows a message 10 times (edited)
//
//Create a new repo on Github and send the link :+1:
//
// 1
//
var firstName = "Callum";
var lastName = "O'Kane";
var isLearning = true;
//
// 2
//
var age = 30;
var height = 183;
//
// 3
//
var fullName = firstName + " " + lastName;
//
// 4
//
var userName = "Cal1234";
if (userName == firstName) {
  display = "User's username can not be first name";
}
//
// 5
//
if (userName == firstName) {
  display = "User's username can not be first name";
} else if (userName == lastName) {
  display = "User's username can not be last name";
}
//
// 6
//
var usernameAvailable = true;
var passwordGood = true;
if (userName == firstName) {
  display = "User's username can not be first name";
} else if (userName == lastName) {
  display = "User's username can not be last name";
} else if (userName == fullName) {
  display = "User's username can not be name";
} else if (usernameAvailable + passwordGood == true) {
  display = "Account created";
} else {
  display = "We have a problem";
}
//
// 7 Not attempted. I know I've messed up Q4 - Q6 but can't figure out how...
//

//
// 8
//
var person = {
  firstName: "Callum",
  age: 30,
  height: 183,
};
//
// 9
//
for (var i = 0; i < 10; i++) {
  console.log("THIS MESSAGE REPEATS 10 TIMES");
}
