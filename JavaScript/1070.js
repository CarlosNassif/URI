const X = require('fs').readFileSync('/dev/stdin', 'utf8');

for (let i = Number(X); i < Number(X) + 12; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    i++;
  }
}
