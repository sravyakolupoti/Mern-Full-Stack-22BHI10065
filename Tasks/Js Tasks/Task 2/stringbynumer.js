const readline = require('readline');

function sortStringAlphabetically(str) {
  return str.split('').sort().join('');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  if (!input) {
    console.log("You must enter a string!");
  } else {
    const sorted = sortStringAlphabetically(input);
    console.log("Sorted string:", sorted);
  }
  rl.close();
});
