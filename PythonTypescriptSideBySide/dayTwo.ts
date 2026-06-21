// Challenge #6: Find Sum of Array
// [10, 20, 30, 40]

function sumOfArray(arr:number[]){
    let sum = 0;
    for(var num of arr){
        sum += num

    }
    return sum;
}

console.log("Sum of array : ",sumOfArray([10, 20, 30, 40]))