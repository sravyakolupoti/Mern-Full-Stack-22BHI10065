const readline = require('readline');

function reverseNumber(num) {
  const isNegative = num < 0;
  const reversedStr = Math.abs(num).toString().split('').reverse().join('');
  const reversedNum = parseFloat(reversedStr);
  return isNegative ? -reversedNum : reversedNum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (input) => {
  const num = parseFloat(input);
  if (isNaN(num)) {
    console.log("That's not a valid number!");
  } else {
    console.log("Reversed number:", reverseNumber(num));
  }
  rl.close();
});
