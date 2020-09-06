// your code goes here
var a = 123;
var b = 456;

let arr = [a,b];

let ra = arr.map( n => {
	return parseInt(n.toString().split('').reverse().join(''));
})

rs = ra[0]+ra[1];
console.log(parseInt((rs.toString().split('').reverse().join(''))));
