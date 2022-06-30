// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertext){
//         if(!this.adjacencyList[vertext]){
//             this.adjacencyList[vertext] = []
//             return true
//         }
//         return false
//     }
    
//     addEdge(vertext1,vertext2){
//         if(this.adjacencyList[vertext1] && this.adjacencyList[vertext2]){
//             this.adjacencyList[vertext1].push(vertext2)
//             this.adjacencyList[vertext2].push(vertext1)
//             return true
//         }
//         return false
//     }

//     removeEdge(vertext1,vertext2){
//         if(this.adjacencyList[vertext1] && this.adjacencyList[vertext2]){
//             this.adjacencyList[vertext1] = this.adjacencyList[vertext1].filter(v=> v !== vertext2)

//             this.adjacencyList[vertext2] = this.adjacencyList[vertext2].filter(v=> v!== vertext1)
//             return true
//         }
//         return false
//     }
//     removeVertex(vertext){
//         if(!this.adjacencyList[vertext]) return undefined
//         while(this.adjacencyList[vertext].length){
//             let temp = this.adjacencyList[vertext].pop()
//             this.removeEdge(vertext,temp)
//         }
//         delete this.adjacencyList[vertext]
//         return this
//     }
// }

// let myGraph = new Graph()
// // myGraph.addVertex(1)
// // myGraph.addVertex(2)
// // console.log(myGraph)
// // myGraph.addEdge('1','2')
// // console.log(myGraph)
// // myGraph.removeEdge('1','2')
// myGraph.addVertex('A')
// myGraph.addVertex('B')
// myGraph.addVertex('C')
// myGraph.addVertex('D')
// console.log(myGraph)
// myGraph.addEdge('A','B')
// myGraph.addEdge('A','C')
// myGraph.addEdge('A','D')
// myGraph.addEdge('B','D')
// myGraph.addEdge('C','D')
// console.log(myGraph)
// myGraph.removeVertex('D')
// console.log(myGraph)


//create a graph at 7pm tonight
/*should like this:
a________b
|\       |
|  \ 
|     \ |
c_______d
then remove vertex d
 */

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertext){
//        if(!this.adjacencyList[vertext]){
//         this.adjacencyList[vertext] = []
//         return true
//        }
//        return false
//     }
//     addEdge(vertext1,vertext2){
//         if(this.adjacencyList[vertext1]&&this.adjacencyList[vertext2]){
//             this.adjacencyList[vertext1].push(vertext2)
//             this.adjacencyList[vertext2].push(vertext1)
//             return true
//         }
//         return false
//     }
//     removeEdge(vertext1,vertext2){
//         if(this.adjacencyList[vertext1]&&this.adjacencyList[vertext2]){
//             this.adjacencyList[vertext1] = this.adjacencyList[vertext1].filter(v => v !== vertext2)
//             this.adjacencyList[vertext2] = this.adjacencyList[vertext2].filter(v => v !== vertext1)
//             return true
//         }
//         return false
//     }
//     removeVertex(vertext){
//         if(!this.adjacencyList[vertext]) return undefined
//            while(this.adjacencyList[vertext].length){
//                let temp = this.adjacencyList[vertext].pop()
//                this.removeEdge(vertext,temp)
//            }
//         delete this.adjacencyList[vertext]
//         return this
//     }
// }
// let myGraph = new Graph()
// myGraph.addVertex('B')
// myGraph.addVertex('A')
// myGraph.addVertex('C')
// myGraph.addVertex('D')
// myGraph.addEdge('B','A')
// myGraph.addEdge('A','C')
// myGraph.addEdge('A','D')
// myGraph.addEdge('B','D')
// myGraph.addEdge('C','D')
// myGraph.removeEdge('B','A')
// myGraph.removeVertex('D')
// console.log(myGraph)


//create another graph:
/*
that looks like this:
a____b____c
     |
     |
     d____e
     //remove the edge d from b
     then remove the vertex c
 */
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertext){
        this.adjacencyList[vertext] = []
    }
    addEdge(vertext1,vertext2){
        if(this.adjacencyList[vertext1] && this.adjacencyList[vertext2]){
            this.adjacencyList[vertext1].push(vertext2)
            this.adjacencyList[vertext2].push(vertext1)
            return true
        }
        return false
    }
    removeEdge(vertext1,vertext2){
        if(this.adjacencyList[vertext1] && this.adjacencyList[vertext2]){
            this.adjacencyList[vertext1] = this.adjacencyList[vertext1].filter(v => v !==vertext2)
            this.adjacencyList[vertext2] = this.adjacencyList[vertext2].filter(v => v !== vertext1)
            return true
        }
        return false
    }
    removeVertex(vertext){
        if(!this.adjacencyList[vertext]) return undefined
        while(this.adjacencyList[vertext].length){
            let temp = this.adjacencyList[vertext].pop()
            this.removeEdge(vertext,temp)
        }
        delete this.adjacencyList[vertext]
        return this
    }
}

let myGraph = new Graph()
myGraph.addVertex('a')
myGraph.addVertex('b')
myGraph.addVertex('c')
myGraph.addVertex('d')
myGraph.addVertex('e')
myGraph.addEdge('a','b')
myGraph.addEdge('b','c')
myGraph.addEdge('b','d')
myGraph.addEdge('d','e')
myGraph.removeEdge('b','d')
myGraph.removeVertex('c')
console.log(myGraph)