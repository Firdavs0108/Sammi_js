

// const arr = [1,2,3,4]

// const newArray = [5,6,7,8]

// // const newArray = arr.slice();                       //Array copy


// // newArray[2] = "O'qi"


// const mixNumber = [...arr, ...newArray]               //Spread operator

// console.log(mixNumber);


// console.log(arr);
// console.log(newArray);


const number = [63,12,0,34]

function logger(a,b,c){
    console.log(a-b-c);
}

logger(...number)
// logger(63,12,3)
