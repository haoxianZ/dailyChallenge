// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node{
    constructor(value,left=null,right=null){
        this.value=value;
        this.left=left;
        this.right=right;
    }
}
const secNode = new Node("left", new Node('left.left'));
const node=new Node('root', secNode,new Node('right'));
function serialize(nod){
    let stringArr=[];
    if(nod.value){
        stringArr.push(nod.value)
    }
    if(nod.left){
        stringArr.unshift(serialize(nod.left))
    }
    
    if(nod.right){
        stringArr.push(serialize(nod.right))
    }
    return stringArr
}
function deserialize(array){
    if(!array){
        return null
    }
    if(array.length===1){
        return new Node(array[0])
    }

    return new Node(array[1],deserialize(array[0]),deserialize(array[2]))

}
console.log(serialize(node).toString())
console.log(node)
console.log(deserialize(serialize(node)))
console.log(deserialize(serialize(node)).left.left.value==='left.left')
console.log(node.left.left.value ==='left.left');