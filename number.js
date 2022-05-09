console.log(parseInt('15.55abc'))
console.log(parseFloat('15.55abc'));

// 0.1 + 0.2 !== 0.3
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1+0.4); // 0.5

let a = 0.1
let b = 0.2
let result = (a*10 + b*10)/10

console.log(result);

Math
let weight = '20.46'
console.log(weight);
console.log(Math.floor(weight)); // 20
console.log(Math.ceil(weight)); // 21
console.log(Math.round(weight)); // 21

console.log(Math.random()); // [0-1)

let numRandom = Math.random() * (10 - 1) + 1;
console.log(numRandom); 
let roundNumRandom = Math.round(numRandom);
console.log(roundNumRandom); 

// isNaN()
console.log(isNaN('12')); // false
console.log(isNaN(true)); // false

console.log(+null); // 0
console.log(isNaN(null)); // false

console.log(isNaN(NaN)); // true

console.log(+undefined); // NaN
console.log(isNaN(undefined)); //true





