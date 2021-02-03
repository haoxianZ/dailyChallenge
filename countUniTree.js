// A unival tree (which stands for "universal value") is a tree 
// where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1
class Node{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
let count = 0;
function countUniTree(root){
    if(!root){
        return true
    }
    let left = countUniTree(root.left);
    let right = countUniTree(root.right);
    if(left === false || right===false){
        return false
    }
    if(root.left && root.left.value!==root.value){
       return false 
    }
    if(root.right && root.right.value!==root.value){
        return false
    }
    console.log('is this run')
    count = count +1;
    console.log(count)
    return true

}
const left = new Node(4,new Node(4),new Node(4));
const right = new Node(5, null, new Node(5));
const root = new Node(5,left,right);
countUniTree(root);
console.log(count)