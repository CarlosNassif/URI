const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

console.log(Number(lines[0]) - Number(lines[1]));
