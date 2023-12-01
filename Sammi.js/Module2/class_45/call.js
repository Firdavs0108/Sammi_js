
'use strict'

function logger (year){
    console.log(this);
}

const car ={
    name: 'MERC',
    color: "yellow"
}

car.model = "SUV"

logger.call(car,2023)                              //call
logger.apply(car, [2023])                         //apply
let binded = logger.bind(car, 2023)               //bind
binded()
