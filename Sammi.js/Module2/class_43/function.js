
function myCar(name, model, year, mph){
    this.name = name
    this.model = model
    this.year = year
    this.mph = mph

    this.speed = function(int){
        console.log(`Please make sure you are in school area. And your speed is ${int}`);
    }

}

myCar.prototype.sayHello = function(name){
    console.log("Hello from " + name);
    console.log(`Hello from ${name}`);
}


const exam = new myCar("bmw", "XM5", 2023,100)

exam.speed(101)
exam.sayHello("BMW")
// console.log(exam);