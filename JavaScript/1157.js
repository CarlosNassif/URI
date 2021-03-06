const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));

const divisors = {
  1: true,
};

N !== 0 ? (divisors[N] = true) : null;

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    divisors[i] = true;
    divisors[N / i] = true;
  }
}

for (const divisor in divisors) {
  console.log(divisor);
}
