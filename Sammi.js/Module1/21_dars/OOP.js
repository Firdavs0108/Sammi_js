
const car = {
    motor: "X",
    color: "red",
    isAirbag: true,
    isSpeed: function(number){
       return number == 90 ? "Maximum speed" : "Please slow!!" 
    }
}

// const exam = car

const gm = {
    // ...car,
    // isAirbag: false
}


// const bmw = Object.create(car)

// console.log(bmw.isSpeed(90));

// Object.setPrototypeOf(gm, car)
// gm.__proto__ = car

// gm = {...car}

// console.log(gm.isSpeed(100));



function isDigit(s) {
    return s==parseFloat(s)
  }

  console.log(isDigit("12  8"));