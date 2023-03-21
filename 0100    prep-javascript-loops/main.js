// whileLoop1
function whileLoop1() {
  const array = [];
  let i = 0;

  while (i < 10) {
    array.push(i);
    i++;
  }

  return array;
}

console.log('whileLoop1 output', whileLoop1());

// whileLoop2
function whileLoop2() {
  const array = [];
  let i = 0;

  while (i < 10) {
    array.push(i * 2);
    i++;
  }

  return array;
}

console.log('whileLoop2 output', whileLoop2());

// forLoop1
function forLoop1() {
  const array = [];
  let i;

  for (i = 0; i < 10; i++) {
    array.push(i);
  }

  return array;
}

console.log('forLoop1 output', forLoop1());

// forLoop2
function forLoop2() {
  let i;
  let text;

  for (i = 100; i > 0; i--) {
    text = console.log('Time till explosion ' + i + '!');
  }

  return text;
}

console.log('forLoop2 output', forLoop2());

// forInLoop
const object = {
  name: 'Young Jae KIM',
  age: '40',
  hobby: 'building lego block',
  invention: 'Database engineer'
};

// forInLoop1
function forInLoop1(object) {
  const array = [];

  for (const i in object) {
    array.push(`${i}`);
  }

  return array;
}

console.log('forInLoop1 output', forInLoop1(object));

/// forInLoop2
function forInLoop2(object) {
  const array = [];

  for (const i in object) {
    array.push(`${object[i]}`);
  }

  return array;
}

console.log('forInLoop2 output', forInLoop2(object));
