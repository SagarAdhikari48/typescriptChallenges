function getEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbers([7, 8, 9, 10, 11]));

// Removes duplicates from array
function removeDuplicates(arr: number[]): number[] {
  const newArr = [...new Set(arr)];
  return newArr;
}

// next way to remove duplicate from array

function removeDuplicate2(arr: number[]): number[] {
  return Array.from(new Set(arr));
}

console.log("removeDuplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(
  "removeDuplicates:",
  removeDuplicates([10, 20, 20, 30, 40, 40, 50]),
);

console.log("removeDuplicate2:", removeDuplicate2([1, 2, 2, 3, 4, 4,5, 5]));


