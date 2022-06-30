// check back 10 18 20 24 26

/*

1. what would be the result of 3+2+"7"?
    since 3 and 2 are integers, they would be add numerically but 7 is string so concatenation will be done. so the result is 57

2.write the code for adding new elements dynamically?
<html>
<head>
<title>adding element dynamically</title>
</head>
<body>
<p id="firstP">firstP</p>
<script>

function addNote(){
    const newP = document.createElement('p')
    const textNode = document.createTextNode('this is a new text')

    newP.appendChild(textNode)

    document.getElementById('firstP').appendChild(newP)
}

</script>
</body>
</html>

3.how to submit a form using javascript?
    document.form[0].submit()

4.how can the style of an element be changed using javascript?
    document.getElementById('myText).style.fontSize = "20"

5. how to convert a string of any base to an integer in javascript?
    use of parseInt() function. it takes 2 argument: first is the string to be converted and the second is the base you will most likely want it to be

6. how can generic objects be created?
 
var I = new object()

7. which keywords are used to handle exceptions?
try, catch,finally
e.
try{
    code
}catch(exp){
    code to throw an exception
}finally{
    code runs either it finishes succesfully or after catch
}

8. how are object properties assigned?
obj ['class'] = 12
    or
obj.class = 12

9. what is the way to get the status of a checkbox?
    the status can be acquired as follows: 
    alert(document.getElementById('checkbox').checked)
    if the checkbox is checked, this will return true.

10. how does closure work in javascript?
the closure is a locally declared variable related to a function that stays in memory when it has returned
eg.
function greet(message){
    console.log(message)
}
function greeter(name,age){
    return name + 'says howdy!! he is ' + age + 'years old'
}

//generate the message
var message = greeter('james', 23)

//pass it explicity to greet
greet(message)
//this function is better represented using closures

function greeter(name,age){
    var message = name + 'says howdy!! he is ' + age + 'years old'
    return function greet(){
        console.log(message)
    }
}

//generate the closure var JamesGreeter = greeter('james',23)
//use the closure 
JamesGreeter()

11. what is a callback function?
a callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
eg. function modifyArray(arr,callback){
    //do something to the function here:
    arr.push(100)
    //call the callback function here
    callback()
}
var arr = [1,2,3,4,5]

modifyArray(arr,function(){
    console.log('array has been modified', arr)
})

12. reverse each word in a sentence
eg. reverse: javascript is the best language
const reverse = (sentence) => {
    sentence = sentence.split(' ')
    sentence = sentence.reverse()
    return sentence.join(' ')
}
console.log(reverse('javascript is the best language'))

13. how to check if an object is an array or not?
arr = [1,2,3]
Array.isArray(arr)//returns true if it is an array

14. how to empty an array?
const arrayList = [1,2,4,5]
// just set the array to an empty list
arrayList = []
or 
arrayList.length = 0

15. how to check if an number is an integer?
//all integers are divible by one
function isInt(num){
    if(num%1 === 0 ){
        return 'Integer'
    }return 'not integer'
}

16.duplicate an array
eg.[1,2,3]
const duplicateArray = (array) => {
    return array.concat(array)
}

17.add 6 to any given number
const addSix = (num) => {
    return num + 6
}

18.fizzbuzz- create a for loop that iterates up to 100 while ouptutting fizz at multiples of 3 and buzz at multiples of 3 and fizzbuzz at multiples of 3 and 5

const fizzBuzz = () => {
    for(let i=0; i<101; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz')
        }else if(i%3===0){
            console.log('fizz')
        }else if(i%5 === 0){
            console.log('buzz')
        }
    }
}
fizzBuzz()

19. given two string, return true if they are anagrams of each other
//anagram if they contain same length and same letters

const anagram = (firstword,secondword) => {
    let a = firstword.split('').sort().join('').toLowerCase()
    let b = secondword.split('').sort().join('').toLowerCase()
    return a===b
}

console.log(anagram('Armys','mary'))

20. what does charAt() do?
it returns the character at a specified index

21. what does concat() do?
it joins to or more strings

22. what does indexOf do? 
it returns the index of the first occurence of a object

23. how to create a cookie?
use the document.cookie object
eg. document.cookie = "key1 = value1; key2=value2;expires=date"

24.how to read cookie?
document.cookie()

*/

