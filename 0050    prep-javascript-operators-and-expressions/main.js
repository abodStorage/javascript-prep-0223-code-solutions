/* eslint-disable no-const-assign */
// i. Multiply
const number1 = 4;
const number2 = 6;
const product = number1 * number2;
console.log('value of product: ' + product);
console.log('typeof product: ' + typeof product);

// ii. Subtract
const payment = 100;
const charge = 90;
const amountRemaining = payment - charge;
console.log('value of amountRemaining: ' + amountRemaining);
console.log('typeof amountRemaining: ' + typeof amountRemaining);

// iii. Average
const tests = 90;
const assignments = 100;
const final = 85;
const grade = (tests + assignments + final) / 3;
console.log('value of amountRemaining: ' + grade);
console.log('typeof amountRemaining: ' + typeof grade);

// iv. String concatenation
const firstName = 'Young Jae';
const lastName = 'KIM';
const fullname = firstName + ' ' + lastName;
console.log('value of fullname: ' + fullname);
console.log('typeof fullname: ' + typeof fullname);

// v. Less-than comparison
const pH = 2;
const isAcidic = pH <= 7;
console.log('value of isAcidic: ' + isAcidic);
console.log('typeof isAcidic: ' + typeof isAcidic);

// vi. Equality comparison
const numberOfSoldiers = 1843;
const isSparta = (numberOfSoldiers === 300);
console.log('value of isAcidic: ' + isSparta);
console.log('typeof isAcidic: ' + typeof isSparta);

// vii. Addition assignment
let nickName = fullname;
nickName += ' is the GOAT';
console.log('value of nickName: ' + nickName);
console.log('typeof nickName: ' + typeof nickName);
