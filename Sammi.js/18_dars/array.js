

 
 const arr = [11,2,13,42,15,61]
 
 arr.push(7);
 arr.pop();

// console.log(arr);

for(let i = 0; i< arr.length; i++ ){
// console.log(arr[i]);
}

arr.forEach((value, index, array) => {
    // console.log(`${index}: ${value} into ` + array);
})

arr.sort((a, b) => {
    // console.log(a-b);
    return a - b
})

console.log(arr);