// Declare variable object - human
const person = {
  firstname: 'Young Jae',
  lastname: 'Kim',
  hobby: 'building lego blocks'
};

// Print out - person's properties
console.log(person);

// Declare variable - fullName
const fullName = person.firstname + ' ' + person.lastname;

// Print out - fullName
console.log('The person\'s full name is ' + fullName);

// Add property - person.job
person.job = 'Database Engineer';

// Print out - person.job
console.log('The person\'s current job is ' + person.job);

// Add property - person.previousJob
person['previousjob'] = 'Project Buyer';

// Print out - person.previousJob
console.log('The person\'s previous job was ' + person['previousJob']);

// Print out - person's properties
console.log(person);
