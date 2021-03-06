const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const SOMA = Number(lines[0]) + Number(lines[1]);

console.log(`SOMA = ${SOMA}`);
