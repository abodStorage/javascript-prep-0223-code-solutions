function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// addTwoNumbers
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise: ' + addTwoNumbersResult);

// convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise: ' + convertHoursMinutesResult);

// getGreeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var getGreetingResult = getGreeting('World');
console.log(getGreetingResult);

// addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise: ' + addAndMultiplyBy5Result);

// multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDevideBy5 Exercise: ' + multiplyAndDivideBy5Result);

// subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise: ' + subtractTwoNumbersResult);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise: ' + getCircleCircumferenceResult);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var getFullNameResult = getFullName('Young Jae', 'KIM');
console.log('getFullName Exercise: ' + getFullNameResult);

// cube
function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);
console.log('cube Exercise: ' + cubeResult);
