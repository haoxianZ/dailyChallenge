// cons(a, b) constructs a pair, and car(pair) and cdr(pair) 
// returns the first and last element of that pair. For example, 
// car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

function cons(a,b){
    let obj={};
    obj[a]=b;
    return obj
}
function car(pair){
    return Object.keys(pair)
}
function cdr(pair){
    return Object.values(pair)
}
const pair = cons(3,4);
console.log(cons(3,4))
console.log(car(pair));
console.log(cdr(pair));