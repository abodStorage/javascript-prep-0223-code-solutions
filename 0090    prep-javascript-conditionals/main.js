// isAdult
const age = 40;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log('isAdult?: ' + isAdult(age));

// didStudentPass
const student1Score = 89;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}

console.log('didStudentPass?: ' + didStudentPass(student1Score));

// gradeCalculator
const student2Score = 104;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}

console.log('gradeCAlculator: ' + gradeCalculator(student2Score));

// seasonMessanger
const season = 'spring';

function seasonMessanger(season) {
  if (season === 'summer') {
    return 'It\'s hot today';
  } else if (season === 'spring') {
    return 'The flowers are blooming';
  } else if (season === 'autumn') {
    return 'The leaves are changing colors';
  } else if (season === 'winter') {
    return 'It\'s cold today';
  } else {
    return 'Please enter a valid season';
  }
}

console.log('seasonMessanger: ' + seasonMessanger(season));

// dayDetector
const dayOfTheWeek = 'thursday';

function dayDetector(dayOfWeek) {
  if (dayOfWeek === 'saturday' || dayOfWeek === 'sunday') {
    return 'Have a good weekend!';
  } else {
    return 'It\'s a weekday!';
  }
}

console.log('dayDetector: ' + dayDetector(dayOfTheWeek));
