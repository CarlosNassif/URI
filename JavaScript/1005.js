const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B] = input.split('\n');

const mean = (Number(A) * 3.5 + Number(B) * 7.5) / 11;

console.log(`MEDIA = ${mean.toFixed(5)}`);
