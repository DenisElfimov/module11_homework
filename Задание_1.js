const arr = [0, 1, 5, 10, 13, 12, 5, 15, 2, NaN, null];

function countEvenOddZero(data) {
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item === 'number' && !Number.isNaN(item)) {
            if (item === 0) zero++;
            else if (item % 2 === 0) even++;
            else odd++;
        }
    }
    return {even, odd, zero};
}

const result = countEvenOddZero(arr);

console.log(`Чётные: ${result.even}`);
console.log(`Нечётные: ${result.odd}`);
console.log(`Нулевые: ${result.zero}`);