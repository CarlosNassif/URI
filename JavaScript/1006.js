const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B, C] = input.split('\n');

const mean = (2 * A + 3 * B + 5 * C) / 10;

console.log(`MEDIA = ${mean.toFixed(1)}`);
