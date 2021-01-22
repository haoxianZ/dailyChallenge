// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function arrayProduct(arr){
    const product = arr.reduce((acc, val) => acc*val);
    return arr.map(item=>{
        return product/item
    })
   
}
const array = [1, 2, 3, 4, 5];
console.log(arrayProduct(array))

//can you do it without divide?
function arrayProductNoDivide(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let filteredArr= arr.slice();
        filteredArr.splice(i,1);
        newArr[i]=filteredArr.reduce((acc, val) => acc*val);
    }
    return newArr
}
console.log(arrayProductNoDivide(array))
