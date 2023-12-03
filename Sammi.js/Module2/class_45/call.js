
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

const btn = document.querySelector('button')

let currentWidth = 300;

btn.addEventListener('click', function(){
    const currentWidth = parseInt(this.style.width) || 100
    this.style.width = currentWidth === 100 ? '300px' : '100px'
});

