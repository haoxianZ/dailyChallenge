// This problem was asked by Airbnb.

// Given a list of integers, write a function that 
// returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, 
// since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, 
// since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

function largestNonAdjSum(array){
    const len = array.length;
    if(len===0){
        return 0
    }
    if(len===1){
        return array[0]
    }
    let sum = [];
    sum[len-1]=array[len-1];
    sum[len-2]=Math.max(array[len-1], array[len-2]);
    for(let i=len-3;i>=0;i--){
        sum[i]=Math.max(array[i]+sum[i+2],sum[i+1]);
        console.log(sum)

    }
    return sum[0]
}
const arr = [2, 4, 6, 2, 5];
console.log(largestNonAdjSum(arr))

//faster version

function largestNonAdjSumFast(array){
    let sum1=0;
    let sum2=0;
    for(let i =array.length-1;i>=0;i--){
        let temp=Math.max(array[i]+sum2, sum1 );
        sum2=sum1;
        sum1=temp;
    }
}