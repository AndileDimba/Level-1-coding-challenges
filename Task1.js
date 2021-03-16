// Tak 1.1

function sumOfMultiply(sum) {
let ans = [];
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        ans.push(i);
        sum += i;
    }
}
return sum;
}

console.log(sumOfMultiply(0));













