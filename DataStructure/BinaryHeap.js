// //max binary heap
// //for any index of an array n, the left child is stored at 2n+1 
// //the parent for any child is at (n-1)/2-floored

// class MaxBinaryHeap{
//     constructor(){
//         this.values = [49,39,33,18,27,12]
//     }
//     insert(element){
//         this.values.push(element)
//         this.bubbleUp()
//     }
//     bubbleUp(){
//         let index = this.values.length-1
//         let element = this.values[index]
//         while (index > 0){
//             let parentIndex = Math.floor((index-1)/2)
//             let parentElement = this.values[parentIndex]
//             if(parentElement >= element) break
//                 this.values[parentIndex] = element
//                 this.values[index] = parentElement
//                 index = parentIndex
            
//         }
//         }
//         // remove(){
//         //     const max = this.values[0]
//         //     const end = this.values.pop()
//         //     this.values[0] = end
//         //     return max
//         //     this.sinkDown()
//         // }
//         sinkDown(){
//             let index = 0
//             const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild,rightChild;
//             let swap = null;

//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild < element) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx];
//                 if(
//                     (swap === null && rightChild< element) || 
//                     (swap !== null && rightChild < leftChild)
//                 ) {
//                    swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }


// let myBinaryHeap = new MaxBinaryHeap()
// myBinaryHeap.insert(55)
// // console.log(myBinaryHeap)
// console.log(myBinaryHeap.remove())
// console.log(myBinaryHeap)


// class PriorityQueue {
//     constructor(){
//         this.values = [];
//     }
//     enqueue(val, priority){
//         let newNode = new Node(val, priority);
//         this.values.push(newNode);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1;
//         const element = this.values[idx];
//         while(idx > 0){
//             let parentIdx = Math.floor((idx - 1)/2);
//             let parent = this.values[parentIdx];
//             if(element.priority >= parent.priority) break;
//             this.values[parentIdx] = element;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }
//     dequeue(){
//         const min = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length > 0){
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild,rightChild;
//             let swap = null;

//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx];
//                 if(leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx];
//                 if(
//                     (swap === null && rightChild.priority < element.priority) || 
//                     (swap !== null && rightChild.priority < leftChild.priority)
//                 ) {
//                    swap = rightChildIdx;
//                 }
//             }
//             if(swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }

// class Node {
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority;
//     }
// }

// let ER = new PriorityQueue();
// console.log(ER.enqueue("common cold",5))
// console.log(ER.enqueue("gunshot wound", 1))
// console.log(ER.enqueue("high fever",4))
// console.log(ER.enqueue("broken arm",2))
// console.log(ER.enqueue("glass in foot",3))






