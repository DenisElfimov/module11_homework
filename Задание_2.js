function isPrime(num) {
  if (!Number.isFinite(num) || num < 2 || num > 1000) {
    console.log('Ожидается число от 2 до 1000');
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      console.log(`${num} — непростое число (делится на ${i})`);
      return false;
    }
  }

  console.log(`${num} — простое число`);
  return true;
}

isPrime(2);

