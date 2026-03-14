// Find the largest number in an array.

function getLargestNumber(arr: number[]): number {
  if (!arr.length) {
    throw new Error("Array cannot be empty");
  }
  let max = arr[0]!;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! > max) {
      max = arr[i]!;
    }
  }
  return max;
}


console.log(getLargestNumber([1, 5, 3, 9, 2]));
console.log(getLargestNumber([-10, -5, -3, -1, -2]));


// Find two numbers in an array that add up to a target.

