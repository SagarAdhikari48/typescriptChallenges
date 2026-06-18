// Flatten Nested Array
//Recursive solution

function flatten(arr: any[]): any[]{
    const result:any[] = [];
    for(const item of arr){
        if(Array.isArray(item)){
            result.push(...flatten(item));
        }else{
            result.push(item);
        }
    }
    return result;


}

console.log(flatten([1,2,3,[4,5,[6,7]]]));