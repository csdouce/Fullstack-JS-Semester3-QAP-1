const validator = require('validator');

// Checking if is email
console.log("Checking if isEmail");
console.log(validator.isEmail('foo@bar.com'));
console.log(validator.isEmail('foo@bar'));
console.log(validator.isEmail('chris.doucetteoutlook.com'));

// Adding blank line
console.log("");

// checking if string equals comparison
let check = "Hello";

console.log("Checking if strings are equal")
console.log(validator.equals('Hello', check));
console.log(validator.equals('10', check));
console.log(validator.equals('hello', check));
console.log(validator.equals('Good-bye', check));

// Adding blank line
console.log("");

// Checking if string isAlpha
console.log("Checking if string isAlpha");
console.log(validator.isAlpha("Hello, Good-bye"));
console.log(validator.isAlpha('123 South Street'));
console.log(validator.isAlpha('Tuesday, March Fifteenth'));
console.log(validator.isAlpha('Once'));

// Adding blank line
console.log("");

// Checking if password is string
console.log("Checking if password is strong");
console.log(validator.isStrongPassword('124FFrrCkd'));
console.log(validator.isStrongPassword('1234'));
console.log(validator.isStrongPassword('zA$#45lKn3D*99aswZZ'));
