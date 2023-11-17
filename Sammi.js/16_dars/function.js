
// function introDuction(name, surname){
//     console.log(`My fullname is ${name} ${surname}`);
// }

// introDuction('Firdavs', 'Nazarov')

// function calc(a,b) {
//     return a + b
// }

// const resultOfAandB = calc(22.2, 221)

// console.log(resultOfAandB);


function first (callback){
    setTimeout(()=>{
        console.log(1);
        callback();
    }, 800)
}

function second(){
    console.log(2);
}


first()
second()