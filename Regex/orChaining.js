let string = 'jamie have a fish as a pet'
//create a pattern so you can match fish,cat,dog or bird
let petRegex = /cat|fish|dog|bird/
console.log(petRegex.test(string))