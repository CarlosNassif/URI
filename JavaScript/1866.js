const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

for (let i = 1; i < lines.length - 1; i++) {
  console.log(Number(Number(lines[i]) % 2 !== 0));
}
