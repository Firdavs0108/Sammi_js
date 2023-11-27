

// const obj ={
//     x : 5,
//     y : 10
// }


function objNusxa(obj){
    let objNew = {}
    
    for(let key in obj){
        objNew[key] = obj[key]
    }

    return objNew
}

const number ={
    x: 29,
    y: 21,

    z: {
        a: 21,
        b: 24,
    }
}

// const newNumber = Object.assign({}, number)              //Assign Clone

//  const newNumber = objNusxa(number)                     // Custome Function
const newNumber = structuredClone (number)                 //Deep Clone

newNumber.z.a = 31



console.log(number);
console.log(newNumber);

// let equalTest = number == Newnumber

// console.log(equalTest);