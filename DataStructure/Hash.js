
// class HashTable{
//     constructor(size=7){
//         this.dataMap = new Array(size)
//     }
//     _hash(key){
//         let hash = 0
//         for (let i=0; i<key.length; i++){
//             hash = (hash + key.charCodeAt(i)*23) % 
//             this.dataMap.length
//         }
//         return hash
//     }
//     set(key,value){
//         let index = this._hash(key)
//         if(!this.dataMap[index]){
//             this.dataMap[index] = []
//         }
//         this.dataMap[index].push([key,value])
//         return this
//     }
//     get(key){
//         let index = this._hash(key)
//         if(this.dataMap[index]){
//             for(let i=0; i< this.dataMap[index].length; i++){
//                 if(this.dataMap[index][i][0] === key){
//                     return this.dataMap[index][i][1]
//                 }
//             }
//         }
//         return undefined
//     }
//     keys(){
//         let allKeys = []
//         for(let i=0; i< this.dataMap.length; i++){
//             if(this.dataMap[i]){
//                 for(let j=0; j < this.dataMap[i].length; j++){
//                     allKeys.push(this.dataMap[i][j][0])
//                 }
//             }
//         }
//         return allKeys
//     }
// }

// let hashTable = new HashTable()
// hashTable.set('bolts',4)
// hashTable.set('washers',50)
// hashTable.set('lumber',55)
// console.log(hashTable.get('washers'))
// console.log(hashTable.keys())
// console.log(hashTable)

//to find out if any element in one array is in another

// function itemInCommon(arr1,arr2){
//     for(let i=0; i< arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//         if(arr1[i] === arr2[j]) return true
//         }
//     }
//     return false
// }

// arr1 = [1,2,3]
// arr2 = [8 , 5, 2]

// // console.log(itemInCommon(arr1,arr2))

// function itemInCommon(arr1,arr2){
//     let obj = {}
//     for (let i=0; i< arr1.length; i++){
//         obj[arr1[i]] = true
//     }
//     for (let j=0; j< arr2.length; j++){
//         if (obj[arr2[j]]) return true
//     }
// }

// arr1 = [1,3,5]
// ar2 = [0,2,5]
// console.log(itemInCommon(arr1,ar2))

//hash constructor

class hashTable{
    constructor(size=7){
        //create a array to represent the address memory
        this.dataMap = new Array(size)
    }
    //create a hash function to generate random memory cells
    _hash(key){
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*23)%this.dataMap.length
        }
        return hash
    }
    //set method for adding items to the hashTable
    set(key,value){
        //generate index
        let index = this._hash(key)
        //check to see if the index position is empty
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key,value])
    }
    //get method for finding items in the hashTable
    get(key){
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i=0; i<this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0] === key)
                //index = index of key, i = each item in array, 0= first item in the array
                return this.dataMap[index][i][1]
            }
        }
        return undefined
    }
    keys(){
        let allKeys = []
        for(let i=0; i< this.dataMap.length; i++){
            if(this.dataMap[i]){
                for(let j=0; j < this.dataMap[i].length; j++){
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}

let myHash = new hashTable()
myHash.set('hi','jamie')
myHash.set('lumber',50)
myHash.set('washer',500)
console.log(myHash)
console.log(myHash.get('lumber'))
console.log(myHash.keys())