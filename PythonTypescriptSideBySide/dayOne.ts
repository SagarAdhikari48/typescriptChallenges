// Challenge #1: Find Even or Odd
function findOddOrEvenNumber(number: number): string {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(findOddOrEvenNumber(10));
console.log(findOddOrEvenNumber(9));
