const fs = require('fs');
const DELIMITER = '\n';

const data = fs.readFileSync('data.txt', 'utf8');
const total = () => {
  const value = data.split(DELIMITER);
  let sum = 0;

  for (let i = 1; i < value.length; i++) {
    const row = value[i].split(',');
    sum += Number(row[row.length - 1].replace('"', ''));
  }

  return sum;
}

const sum = total();
console.log(sum);