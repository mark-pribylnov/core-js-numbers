function toExponential(number) {
  let count = 0;
  if (number < 0) {
    for (let i = 0; i >= number; i -= 1) {
      if (i % 2 !== 0) count += 1;
    }
  } else {
    for (let i = 0; i <= number; i += 1) {
      if (i % 2 !== 0) count += 1;
    }
  }

  return count;
}
console.log(toExponential(-15));

// const sine = num - num ** 3 / 6 + num ** 5 / 120 - num ** 7 / 5040;
// return Math.round(sine);
