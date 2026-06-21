// Challenge #6: Find Sum of Array
// [10, 20, 30, 40]

function sumOfArray(arr: number[]) {
  let sum = 0;
  for (var num of arr) {
    sum += num;
  }
  return sum;
}

// console.log("Sum of array : ", sumOfArray([10, 20, 30, 40]));

// Challenge #7: Find Average of Numbers
// [10, 20, 30, 40, 50]

function findAverageOfArray(arr: number[]) {
  let sum = 0;
  let average = 0;
  for (const item of arr) {
    sum += item;
    average = sum / arr.length;
  }
  return average;
}

// console.log(
//   "avarage of the number is : ",
//   findAverageOfArray([10, 20, 30, 40, 50]),
// );

// Challenge #8: Count Occurrences of a Character
// # hello
// # l - 2

function calculateCharInString(text: string, targetChar: string) {
  let count = 0;
  for (const char of text) {
    if (char == targetChar) {
      count += 1;
    }
  }
  return count;
}

// console.log("count occurance or char : ", calculateCharInString("hello", "l"));

// Challenge #9: Remove Duplicates from Array
// [1, 2, 2, 3, 4, 4, 5]
function remove_duplicates(numbers: number[]) {
  return [...new Set(numbers)];
}

// console.log("Removed duplicates : ", remove_duplicates([1, 2, 2, 3, 4, 4, 5]))

function removeDuplicatUsingLoop(arr: number[]) {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let existDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] == arr[i]) {
        existDuplicate = true;
        break;
      }
    }
    if (!existDuplicate) {
      result.push(arr[i]!);
    }
  }
  return result;
}

// console.log(removeDuplicatUsingLoop([1, 2, 2, 3, 4, 4, 5]));

// Challenge #10: Find Second Largest Number
// [10, 50, 30, 90, 80]

function findSecondLargestElement(arr: number[]): number {
  const uniqueItems = [...new Set(arr)];
  const sortedItems = uniqueItems.sort((a, b) => a - b);
  console.log("sorted elements : ", sortedItems);
  return sortedItems[sortedItems.length - 2]!;
}
// console.log("Second largest: ", findSecondLargestElement([10, 50, 30, 90, 80]));

// ORED
function findSecondLargest(arr: number[]): number | null {
    // If you're looking for the second largest, both variables should start at negative infinity:
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]!;
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num != largest) {
      secondLargest = num;
    }
  }
  if (secondLargest === -Infinity) {
    return null;
  }
  return secondLargest;
}
console.log("findSecondLargest : ", findSecondLargest([20, 30, 15, 87,98]))