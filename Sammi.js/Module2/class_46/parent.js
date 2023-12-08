
'use strict'

class Parent{
    constructor(name, color, speed){
        this.name = name
        this.color = color
        this.speed = speed
    }

    calcSpeed(maxSpeed){
        return maxSpeed <=50 ? "This is school area. Keep speed limit " : "This is school area. Your speed must under 50"
    }
}

class Child extends Parent{
    constructor(name,color, speed, isAirbag){
        super(name,color,speed)
        this.isAirbag = isAirbag
    }

    calcSpeed(maxSpeed){
        return maxSpeed <=100 ? "This is university area. Keep speed limit, Mr " + this.name : "This is university area. Your speed must under 100. Now you are under police officers Mr " + this.name
        
    }
} 

const driver = new Parent('BMW', "BLACK", 100)

// console.log(driver);
// console.log(driver.calcSpeed(200));

const driver2 = new Child("merc", "white", 20, true)

// console.log(driver2);
// console.log(driver2.calcSpeed(100.1));


function logger (a,b, ...rest){
    console.log(a,b,rest);
}

logger(1,2,7,8,9)


function example (number, def = 10){
    console.log(number + def);
}

example(12)
