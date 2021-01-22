function check(arr, k){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]===k && i!==j){
                return true
            }
        }
        
    }
    return false
}
const array = [10,15,7,13];
//faster solution
function checkFast(arr,k){
    let sum=[];
    for(let i=0;i<arr.length;i++){
        const diff = k-arr[i];
        if(arr.includes(diff)){
            return true
        }
    }
    return false
}
console.log(check(array,17))
console.log(checkFast(array,25))