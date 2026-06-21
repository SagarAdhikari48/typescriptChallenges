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

console.log(
  "avarage of the number is : ",
  findAverageOfArray([10, 20, 30, 40, 50]),
);
