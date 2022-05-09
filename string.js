console.log('STRING')
console.log(typeof 'STRING');

const password = 'I Love JavaScript'
//                01234567
console.log(password.length);

const confirmPassword = 'i love javascript'
const confirmPassword2 = 'I Love JavaScript';

console.log(password === confirmPassword);
console.log(password === confirmPassword2);

console.log(password.toLowerCase());
console.log(confirmPassword2.toLowerCase());
console.log(password.toLowerCase() === confirmPassword2.toLowerCase());

console.log(password.toUpperCase());
console.log(confirmPassword2.toUpperCase());

// также применимы к массивам
console.log(password.indexOf('javascript')); // -1
console.log(password.indexOf('JavaScript')); // 7

console.log(password.includes('javascript')); // false
console.log(password.includes('JavaScript')); // true

console.log(password.toLowerCase().indexOf('javascript')); // 7
console.log(password.toLowerCase().indexOf('JavaScript')); // -1

let str = 'HeLlO wOrLd'
let search = 'World'
let normalizeSearch = search.toLowerCase()
console.log(str.toLowerCase().includes(normalizeSearch)); // true

// 
const filePAth = './string.js';

let searchFileName = 'string.js'
let searchFileExt = '.js'

console.log(filePAth.endsWith(searchFileName)); // true
console.log(filePAth.endsWith(searchFileExt)); // true
console.log(filePAth.endsWith('.css')); // false

// 
let message = 'Hello! I am glad to see you!'
//             012345
console.log(message);

let searchWord = '   heLlo   '
let normalizeSearchWord = searchWord.toLowerCase().trim()

let isWordIndex = message.toLowerCase().indexOf(normalizeSearchWord);
console.log(isWordIndex);

if(isWordIndex === -1){
    console.log('This word is not exist');
}else{
    console.log('Yes! I found!');
    let slicedWord = message.slice(0, 6);
    console.log('slicedWord:', slicedWord);
    console.log(message);

    let cloneMessage = message.slice()
    console.log('cloneMessage:', cloneMessage);
    // cloneMessage = cloneMessage +' '+ 'My name is Sara'
    cloneMessage = `${cloneMessage} My name is Sara`;
    console.log('cloneMessage:', cloneMessage);

}