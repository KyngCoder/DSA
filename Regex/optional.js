//create a regex to match both the american and british spelling of favourite/favorite

let american = 'favorite'
let british = 'favourite'

let regex = /favou?rite/
console.log(regex.test(american),regex.test(british))