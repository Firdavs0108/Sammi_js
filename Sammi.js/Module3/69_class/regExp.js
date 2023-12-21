
// Regular Expressions

// Search and match ******************************************************************


//  const firstName = prompt('What is your name?', '')

//  const example = /a/g

// //g => global
// //i => aynan katta yo kichik holatda ham harflarni aniqlashda

//  console.log(firstName.search(example));

//  console.log(firstName.match(example));




// Replace *****************************************************************************

// const password = prompfnt('Write your password')

// console.log(password.replace(/./g, '*'));



// Test *********************************************************************************

// const name = prompt('What is your name?')

// const regexp = /fir/gi

// if (regexp.test(name)) {
//     console.log(`Welcome, Mr ${name}`);
// } else{
//     console.log(`Mr ${ name}, You are not admin!`);
// }


// ******************************************************************************************

// \d  =>  only for numbers
// \w  =>  only for words
// \s  =>  only for 


// \D  =>  not a number
// \W  =>  not a word
// \S  =>  not a space   // true and false




//example for \s *******************************************************************

// const name = prompt('What is your name')

// const regexp = /\s/gi

// console.log(regexp.test(name));



// example for \w *******************************************************************

const name = prompt('What is your name')

const regexp = /\w/gi

console.log(name.match(regexp));


