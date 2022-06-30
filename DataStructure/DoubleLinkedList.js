class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
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
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            let temp = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
            return temp
        }
        this.length--
        return this
    }
    unshift(value){
        if(this.length===0){
            this.head = newNode
            this.tail = newNode
        }
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }
    shift(){
        if(!this.head) return undefined
        if(this.length===1){
            this.head = null
            this.tail = null
        }else{
            let temp = this.head
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return this
    }
    get(index){
        if(!this.head) return undefined
        if(index<0 || index>this.length-1) return undefined
        let temp = this.head
        if(index < this.length/2){
            for(let i=0; i<index; i++){
                temp = temp.next
            }
        }else{
            temp = this.tail
            for(let i=this.length-1; i>index; i--){
                temp = temp.prev
            }
        }
        return temp
    }
    set(index,value){
        if(!this.head) return undefined
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }
    insert(index,value){
        const newNode = new Node()
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        if(this.index === 0) return this.unshift(value)
        if(this.index === this.length) return this.push(value)
        if(index <0 || index > this.length) return undefined
        const before = this.get(index-1)
        const after = before.next
        before.next = newNode
        newNode.next = after
        newNode.prev = before
        after.prev = newNode
        this.length++
        return true
    }
    remove(index){
        if(!this.head) return undefined
        if(index <0 || index>this.length)return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let temp = this.get(index)
        if(temp){
            temp.prev.next = temp.next
            temp.next.prev = temp.prev
            temp.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
}

let myDoubleLinkedList = new DoubleLinkedList(4)
// myDoubleLinkedList.push(55)
// myDoubleLinkedList.push(33)
// myDoubleLinkedList.pop()
// myDoubleLinkedList.unshift(88)
// myDoubleLinkedList.unshift()
// myDoubleLinkedList.pop()
// myDoubleLinkedList.pop()
// myDoubleLinkedList.shift()
// // console.log(myDoubleLinkedList)
// // console.log(myDoubleLinkedList.get(2))
// console.log(myDoubleLinkedList.set(0,44))
// console.log(myDoubleLinkedList.remove(0))
myDoubleLinkedList.set(0,44)
myDoubleLinkedList.push(9)
myDoubleLinkedList.remove(0)
console.log(myDoubleLinkedList)