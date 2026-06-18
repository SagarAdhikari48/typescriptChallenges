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

// # Challenge #2
// # Find the largest Number from an array

function findLargestNumberInArray(numbers: number[]): number | undefined {
  let largest = numbers[0];
  for (const num of numbers) {
    if (num > largest!) {
      largest = num;
    }
  }
  return largest;
}

console.log(
  "largest number is: ",
  findLargestNumberInArray([1, 3, 6, 9, 40, 36]),
);
