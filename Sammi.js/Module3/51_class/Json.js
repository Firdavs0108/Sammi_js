'use strict'

const car = {
    name: 'BMW',
    color: 'Black',
    extra:{
        isAirBag: true,
        ballon: 10,
    }
}

const deepClone = JSON.parse(JSON.stringify(car))

deepClone.extra.ballon = 15;

console.log(deepClone);
console.log(car);

// const objToJson = JSON.stringify(car)

// const jsonToObj = JSON.parse(objToJson)

// console.log(objToJson);
// console.log(jsonToObj);