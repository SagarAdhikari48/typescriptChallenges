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

console.log("removeDuplicate2:", removeDuplicate2([1, 2, 2, 3, 4, 4, 5, 5]));

// Task: Calculate the total sum of numbers in an array.

function calculateSumOfArray(arr: any[]) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log("calculateSumOfArray", calculateSumOfArray([1, 2, 3, 4, 5, 6]));

// 2. Find largest number

function findLargestNumberOfArray(arr: number[]): number {
  return Math.max(...arr);
}

console.log(
  "findLargestNumberOfArray: ",
  findLargestNumberOfArray([1, 3, 4, 5, 6, 43, 65, 12, 43]),
);

function getLargestNumberOfArrayUsingForLoop(arr: number[]): number {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! > result!) {
      result = arr[i];
    }
  }
  return result!;
}
console.log(
  "getLargestNumberOfArrayUsingForLoop: ",
  getLargestNumberOfArrayUsingForLoop([1, 2, 4, 6, 8, 9]),
);

// 3. Find smallest number

function findSmallestNumberOfArray(arr: any[]) {
  return Math.min(...arr);
}

console.log(
  "findSmallestNumberOfArray: ",
  findSmallestNumberOfArray([1, 2, 4, 6, 8, 9]),
);

function getMinNumberOfArrayUsingLoop(arr: number[]): number {
  let result = arr[0];
  for (const item of arr) {
    if (item < result!) {
      result = item;
    }
  }
  return result!;
}

console.log(
  "getMinNumberOfArrayUsingLoop: ",
  getMinNumberOfArrayUsingLoop([1, 2, 4, 6, 8, 9]),
);

// 4. Reverse array
function reverserArray(arr: any[]) {
  return arr.slice().reverse();
}
console.log("reverserArray: ", reverserArray([1, 2, 4, 6, 8, 9]));

function getReverseOfArrayUsingForLoop(arr: any[]) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(
  "getReverseOfArrayUsingForLoop: ",
  getReverseOfArrayUsingForLoop([3, 2, 4, 6, 8, 9]),
);

// 5. Remove duplicates
function removeDuplicate(arr: any[]) {
  return [...new Set(arr)];
}
console.log("removeDuplicate: ", removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

function getAndRemoveDuplicate(arr: any[]) {
  let result: any[] = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
console.log(
  "getAndRemoveDuplicate: ",
  getAndRemoveDuplicate([1, 2, 2, 3, 4, 4, 5,5]),
);

