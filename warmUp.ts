// 1) Reverse string without reverse()
// Useful when learning string indexing and loops.
function reverseString(value: string): string {
  var result = "";
  for (let i = value.length - 1; i >= 0; i--) {
    result += value[i];
  }
  return result;
}
console.log("reverseString: ", reverseString("HelloWorld!"));

// 2) Count vowels in string
function countVouwelInString(str: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("countVouwelInString: ", countVouwelInString("Typescripts"));

// 3) Remove falsy values
// Remove false, 0, "", null, undefined, NaN.

function removeFalsyValues(values: any[]) {
  return values.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, "", 3, null]));

// 4) Capitalize first letter of each word
// split → break sentence into words inside array with comma separated [I, Love, Nepal]
// map   → change each word (callback function for each element of the array)
// join  → combine all elements of array  back into string
function capitalizeFirstLetterOfEachWord(value: string): string {
  return value
    .split(" ")
    .map((word) => {
      if (word.length === 0) {
        return word;
      }
      return word[0]?.toUpperCase() + word?.slice(1)?.toLowerCase();
    })
    .join(" ");
}

console.log(
  "capitalizeFirstLetterOfEachWord:",
  capitalizeFirstLetterOfEachWord(
    "This is the case for the Capitalize the first letter of the word.",
  ),
);

function convertFirstCharOfASentence(str: string): string {
  return str
    .split(" ")
    .map((word) => {
      if (!word.length) {
        return word;
      }
      return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
console.log(
  "convertFirstCharOfASentence",
  convertFirstCharOfASentence(
    "This is a test of the for the string of first letter to convert into UPPercase",
  ),
);

// 5) Find second largest number
function findSecondLargestNumberOfArray(arr: number[]): number {
  const uniqueSortedArray = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSortedArray.length >= 2 ? uniqueSortedArray[1]! : null!;
}

console.log(
  "findSecondLargestNumberOfArray ",
  findSecondLargestNumberOfArray([1, 2, 4, 5, 6, 80, 70, 90]),
);

function mergeTwoArray(num1: number[], num2: number[]): number[] {
  const newArray = [...new Set([...num1, ...num2])];
  return newArray;
}

console.log(
  "mergeTwoArray: ",
  mergeTwoArray([1, 2, 3, 4, 5, 6, 6, 6, 7, 8], [10, 20, 30, 40, 60, 1]),
);

// 7) Find index of element manually
function findIndexOfAnElements<T>(arr: T[], number: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      return i;
    }
  }
  return -1;
}

console.log(
  "findIndexOfAnElements: ",
  findIndexOfAnElements([20, 30, 40, 50, 60], 60),
);
console.log(
  "findIndexOfAnElements: ",
  findIndexOfAnElements<string>(["a", "b", "c"], "b"),
); // 1

// 8) Convert string → char count object

function convertStringToCharCountObj(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
}

// console.log(
//   "convertStringToCharCountObj: ",
//   convertStringToCharCountObj("THisisacharcoundtest"),
// );

// 9) Sum only even numbers
function sumOfEvenNumbers(arr: number[]) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sum = sum + num;
    }
  }
  return sum;
}

console.log("sumOfEvenNumbers: ", sumOfEvenNumbers([2, 4, 6, 5, 7, 8, 0]));

// 10) Convert array → object (id as key)
type Item = {
  id: string | number;
  [key: string]: any;
};
function convertArrayToObject(arr: Item[]) {
  const result: Record<string, Item> = {};
  for (const item of arr) {
    result[String(item.id)] = item;
  }
  return result;
}

console.log(
  "convertArrayToObject: ",
  convertArrayToObject([{ id: "5", Sagar: "adk" }]),
);

// 11) Find longest string
function findLongestStringInArray(str: string[]) {
  let longestStr = "";
  for (const string of str) {
    if (string.length > longestStr.length) {
      longestStr = string;
    }
  }
  return longestStr;
}

console.log(
  "findLongestStringInArray",
  findLongestStringInArray(["sagar", "Apple", "Environment"]),
);

// 12) Check palindrome
// 123=321, "madam" = "madam"
function checkPalindrome(str: string) {
  const reverse = str.split("").reverse().join("");
  return reverse == str;
}

console.log("checkPalindrome: ", checkPalindrome("teacher"));

// 13) Flatten 1 level array

function flattenOneLevel<T>(arr: (T | T[])[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log("flattenOneLevel: ", flattenOneLevel([1, 2, 4, [3, 4, [1, 2, 3]]]));

// 14) Rotate array right
// [1,2,3,4,5] -> [5, 1, 2, 3, 4]
function rotateArray<T>(array: (T | T[])[]): (T | T[])[] {
  if (array.length === 0) {
    return [];
  }
  return [array[array.length - 1]!, ...array.slice(0, array.length - 1)];
}

console.log("rotateArray:    ", rotateArray([1, 2, 3, 4, 5]));

// 15) Remove specific value
function removeElementFromArray(arr: number[], val: number) {
  return arr.filter((ele) => ele !== val);
}
console.log(
  "removeElementFromArray : ",
  removeElementFromArray([1, 2, 3, 4, 5], 4),
);

// 16) Get unique values
function getUniqueArray(arr: number[]) {
  return [...new Set(arr)];
}
console.log(
  "getUniqueArray: ",
  getUniqueArray([1, 2, 3, 4, 4, 5, 6, 5, 7, 8, 7, 6]),
);

// 17) Count occurrences
// [1,2,3,4,4,5,4,5,6,2,3]
function countOccuranceInArray(values: string[]): Record<string, number> {
  return values.reduce(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
}

console.log(
  "countOccuranceInArray : ",
  countOccuranceInArray([
    "Apple",
    "Banana",
    "Grapes",
    "Apple",
    "Banana",
    "Apple",
  ]),
);

// 18) Find missing number (simple)

function findMissingItemsInArray(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, number) => sum + number, 0);
  return expectedSum - actualSum;
}
console.log(
  "findMissingItemsInArray : ",
  findMissingItemsInArray([1, 2, 3, 4, 5, 6, 8, 9]),
);
