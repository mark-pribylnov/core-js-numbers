function getSumOfDigits(num) {
  let sum = num.toString()[0];

  for (let i = 1; i <= num.toString().length - 1; i += 1) {
    sum += num.toString()[i];
  }
  return sum;
}
console.log(getSumOfDigits(123));
