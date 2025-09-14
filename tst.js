function toExponential(number, fractionDigits) {
  let digitsBeforeE = null;
  if (number > 0) {
    digitsBeforeE = number.toString().slice(0, fractionDigits + 1);
  } else {
    digitsBeforeE = number.toString().slice(0, fractionDigits + 2);
  }

  return `${digitsBeforeE.replace('1', '1.')}e+4`;
}
console.log(toExponential(-12345, 3));

// const sine = num - num ** 3 / 6 + num ** 5 / 120 - num ** 7 / 5040;
// return Math.round(sine);
