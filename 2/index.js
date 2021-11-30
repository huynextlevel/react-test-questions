const checkNumber = (number) => {
  if (number % 14 === 0) return 'foobar';

  return number % 2 === 0 ? 'foo' : number % 7 === 0 ? 'bar' : number;
}

// const number = checkNumber(14); // Number divisible by 2
// const number = checkNumber(49); // Number divisible by 7
// const number = checkNumber(31); // Number for other cases
const number = checkNumber(28); // Number divisible by 14
console.log(number);
