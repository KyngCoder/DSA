//you are given two non empty linked-list representing two non negative numbers
//the digits are stored in reverse order, and each of their nodes are stored in an reversed order
//add the two numbers and return their sum as a linked list

// const addTwoNum = (list1,list2) => {
//    list1 = Number(list1.reverse().join(''))
//    list2 = Number(list2.reverse().join(''))
//    linkList = (list1 + list2).toString().split('').reverse().map(elem => Number(elem))
//    return linkList
// }
// console.log(addTwoNum([2,4,3],[5,6,4]))


//definition for single Linked list
class ListNode{
    constructor(val,next){
    this.val = (val === undefined? 0 : val)
    this.next = (next === undefined? null : next)
    }
}


const addTwoNumbers = (l1,l2) => {
    let carry = 0
    let result = new ListNode(-1)
    let dummy = result

    while(l1 || l2 || carry){
        let l1Val = l1? l1.val : 0
        let l2Val = l2? l2.val : 0

        let nextDigit = (l1Val + l2Val + carry)%10
        result.next = new ListNode(nextDigit)
        result = result.next

        carry = Math.floor((l1Val + l2Val + carry)/10)

        l1 = l1? l1.next : null
        l2 = l2? l2.next : null
    }

    return dummy
}

const l1 = new ListNode([2,4,3])


const l2 = new ListNode([5,6,4])
console.log(l1)
console.log(l2)

console.log(addTwoNumbers(l1,l2))
