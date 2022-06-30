
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    
    pop(){
        if(!this.head) return undefined
            let temp = this.head
            let pre = this.head
            while(temp.next){
                pre = temp
                temp = temp.next
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            if (this.length===0){
                this.head = null
                this.tail = null
            }
            return temp
        }

        unShift(value){
            const newNode = new Node(value)
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }else{
                newNode.next = this.head
                this.head = newNode
            }
            this.length++
            return this

        }
        shift(){
            if(!this.head) return undefined
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            this.length--
            if(this.length===0){
                // this.head = null
                this.tail = null
            }
            return temp
        }
        
        get(index){
            if(index<0||index>=this.length) return undefined
            let temp = this.head
            for(let i=0; i<this.index; i++){
                temp = temp.next
            }
            return temp
        } 
        set(index,value){
            let temp = this.get(index)
            if(temp){
                temp.value = value
                return true
            }
            return false

        }
        insert(index,value){
            if(index===0) return this.unShift(value)
            if(index===this.length) return this.push(value)
            if(index<0||index>this.length) return false
            const newNode = new Node(value)
            let temp = this.get(index-1)
            newNode.next = temp.next
            temp.next = newNode
            this.length++
            return true
            
        }
        remove(index){
            if(index<0||index>=this.length) return undefined
            if(index===0) return this.shift()
            if(index===this.length-1) return this.pop()
            let temp = this.get(index-1)
            let currentNode = this.get(index)
            temp = currentNode.next
            currentNode.next = null
            this.length--
            return true
        }
        reverse(){
            let temp = this.head
            this.head = this.tail
            this.tail = temp
            let next = temp.next
            let prev = null
            for(let i=0; i<this.length; i++){
                next = temp.next
                temp.next = prev
                prev = temp
                temp = next
            }
            return this
        }
      
        
    }





//const newNode = new Node(4)

let myLinkedList = new LinkedList(4)
myLinkedList.push(6)

// myLinkedList.pop()
// console.log(myLinkedList)
// myLinkedList.pop()
// console.log(myLinkedList)
// myLinkedList.pop()
// console.log(myLinkedList)
// myLinkedList.unShift(9)
// console.log(myLinkedList)
// myLinkedList.shift()
// myLinkedList.shift()
//myLinkedList.shift()

myLinkedList.set(0,52)
myLinkedList.insert(0,99)
// myLinkedList.insert(2,33)
// myLinkedList.insert(3,55)
myLinkedList.remove(3)
myLinkedList.reverse()
console.log(myLinkedList)


