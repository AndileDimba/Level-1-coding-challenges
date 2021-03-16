// Tak 1.2

function numbers(num1,num2) {
  let sum = num1 + num2;
  let sum2 = sum.toString();
  if (num1 == 3 || num2 == 3) {
    if (sum2.includes(3)) {
      return true;
  } else {
      return false;
  } 
} else {
  return false;
}
}


console.log(numbers(3,10))