const input = require('fs').readFileSync('/dev/stdin', 'utf8');

console.log(`A=${(Math.pow(input, 2) * 3.14159).toFixed(4)}`);
