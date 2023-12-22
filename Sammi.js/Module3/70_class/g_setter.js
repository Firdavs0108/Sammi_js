
'use strict'

class Car{
    constructor(name, color, bonus){
        this.name = name;
        this.color = color;
        this._extraBonus = bonus;
    }

    info(){
        console.log(`Name of the car: ${this.name}, color is ${this.color}. We will give you ${this._extraBonus} bonus. Thank you:)`);
    }
    
    get bonus(){
        return this._extraBonus
    }

    set bonus(bonus){
        if (typeof bonus == 'number'  && bonus > 0  && bonus < 100) {
            this._extraBonus = bonus
        } else {
            console.log("We don't provide bonus above 100");
        }
    }

}

const bmw = new Car('bmw', 'black', 19)

bmw._extraBonus = 23
bmw.name = 'ford'
bmw.info()


export default Car

