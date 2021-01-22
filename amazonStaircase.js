// // There's a staircase with N steps, and you can climb 1 or 2 steps at a time. 
// Given N, write a function that returns the number of unique ways you can climb the staircase. 
// The order of the steps matters.

// // For example, if N is 4, then there are 5 unique ways:

// // 1, 1, 1, 1
// // 2, 1, 1
// // 1, 2, 1
// // 1, 1, 2
// // 2, 2
// // What if, instead of being able to climb 1 or 2 steps at a time, 
// you could climb any number from a set of positive integers X? 
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. 
// Generalize your function to take in X.

function oneOrTwoSteps(steps){
    let path = {};
    if(steps<=1) return 1
    return oneOrTwoSteps(steps-1)+ oneOrTwoSteps(steps-2)
}

//better way
function oneOrTwoStepsFast(steps){
    let a=1;
    let b=2;
    for(let i=0;i<steps-1;i++){
        let tmp=a;
        a=b;
        b=tmp+b;
    }
    return a
}
console.log(oneOrTwoSteps(4))

console.log(oneOrTwoStepsFast(4))

function anyNumSteps(steps,arr=[1,3,5]){
    let sum=0;
    if (steps<0) return 0;
    else if(steps===0) return 1;
    
    else{
        
        for(let i=0;i<arr.length;i++){
            sum=anyNumSteps(steps-arr[i])+sum;
        }
    } return sum
}
console.log(anyNumSteps(5))

//better way again
function anyNumStepsFast(steps, X=[1,3,5]){

    let cache = new Array(steps+1).fill(0);
    console.log(cache)    
    cache[0]=1;
    for(let i=1; i<=steps;i++){
        for(let j=0;j<X.length;j++){
            if((i-X[j])>=0){
                cache[i]=cache[i-X[j]]+cache[i]
            }
        }
        
    }
    console.log(cache)
    return cache[steps]
}
console.log(anyNumStepsFast(5))