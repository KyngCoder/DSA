let string = '<h1>this is an h1 tag</h1>'
// let pattern = /<[a-z0-9]*>/ig
let pattern = /<.*?>/
console.log(string.match(pattern))