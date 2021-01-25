// Given an array of integers, find the first missing positive integer 
// in linear time and constant space. In other words, find the lowest 
// positive integer that does not exist in the array. The array can 
// contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. 
// The input [1, 2, 0] should give 3.

function findMissingInt(array){
    let obj = {};
    for(let i=0;i<array.length;i++){
        if(array[i]>0&&array[i]<array.length){
            obj[array[i]]=true; 
        }
    }
    for(let i=1;i<array.length+1;i++){
        if(!obj[i]){
            return i
        }
    }
    return (array.length+1)
}

const array= [0,1,2,-1,5,3];
console.log(findMissingInt(array))
