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

console.log(check(array,17))