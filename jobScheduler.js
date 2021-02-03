// This problem was asked by Apple.

// Implement a job scheduler which takes in a function
// f and an integer n, and calls f after n milliseconds.

function timeOut(f,n){
    setTimeout(f, n);
}
function test(){
    console.log('sup')
}
timeOut(test, 1000)