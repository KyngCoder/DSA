
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if (this.root===null){
//             this.root = newNode
//             return this
//         }
//         let temp = this.root 
//         while(true){
//             if(newNode.value === null) return undefined
//             if(newNode.value < temp.value){
//                 if(temp.left === null){
//                     temp.left = newNode
//                     return this
//                 }
//                 temp = temp.left
//             }
//                 else{
//                     if(temp.right===null){
//                         temp.right = newNode
//                         return this
//                     }
//                     temp = temp.right
//                 }
//             }

//         }
//         contains(value){
//             if(this.root === null) return false
//             let temp = this.root 
//             while(temp){
//                 if(value < temp.value){
//                     temp = temp.left
//                 }else if(value > temp.value){
//                     temp = temp.right
//                 }else{
//                     return `true ${value}`
//                 }
//             }
//             return `false ${value} doesn't exist in tree`
//         }
//     }


// let myTree = new BST()
// myTree.insert(47)
// myTree.insert(76)
// myTree.insert(52)
// myTree.insert(27)
// myTree.insert(66)
// myTree.insert(89)
// myTree.insert(33)
// console.log(myTree)
// console.log(myTree.contains(29))


//constructor for binarySearchTree
/* node: {
        value:47,
        left:null,
        right:null
}*/
//constructor for node

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// //constructor for binarysearchtree
// class BST{
//     constructor(){
//         //create a new node
//         // const newNode = new Node(value)
//         //have to have something pointing to parent node
//         this.root = null
//     }
//     //insert method
//     insert(value){
//         //create a new node
//         const newNode = new Node(value)
//         //check to see if tree is empty
//         if(this.root === null){
//             this.root = newNode
//             return this
//         }
//         //crete a variable to keep track of root child
//         let temp = this.root
//         //create a while loop
//         while(true){
//             //check to see if node already exist in the tree
//             if(temp.value === newNode.value) return undefined
//             //if newNode < temp go left else go right
//             if(newNode.value < temp.value){
//                     if(temp.left === null){
//                         temp.left = newNode
//                         return this
//                     }
//                     temp= temp.left
//                 }else{
//                 if(temp.right === null){
//                     temp.right = newNode
//                     return this
//                 }
//                 temp = temp.right
//             }
//         }
        
//     }
//     //contains method to find element
//     contains(value){
//         //check to see if tree is empty
//         if(this.root === null) return false
//         //create a tracker
//         let temp = this.root
//         //create a while loop that terminates if temp hits null
//         while(temp){
//             if(value < temp.value){
//                 temp = temp.left
//             }else if(value > temp.value){
//                 temp = temp.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }
// }
// let myBST = new BST()
// myBST.insert(47)
// myBST.insert(76)
// myBST.insert(31)
// myBST.insert(76)
// console.log(myBST)
// console.log(myBST.contains(3))


//create a tree from scratch that looks like this: 
/*
    65
    /\
  45  85
  /\  /\
 25  70 93

 and check to see if the number 25 and 68 exist in the tree

 you must do this at 7a.m at tonight else re-watch the videos again
 */

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
        }
        contains(value){
            let temp = this.root
            while(temp){
                if(value < temp.value){
                    temp = temp.left
                }else if(value > temp.value){
                    temp = temp.right
                }else{
                    return true
                }
            }
            return false
        }
      
}

let myBST = new BST()
myBST.insert(67)
myBST.insert(45)
myBST.insert(85)
myBST.insert(25)
myBST.insert(70)
myBST.insert(99)
console.log(myBST)
console.log(myBST.contains(68))