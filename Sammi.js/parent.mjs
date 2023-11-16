class Parent {
    constructor(name,year,model){
        this.name = name;
        this.year = year;
        this.model = model;
    }

    showInfo(){
        console.log("Hello " + this.name + " Thank you for choosing " + this.model );
    }
}

const example = new Parent("Fredrick", 2010, "BMW");
example.showInfo();

const example2 = new Parent("Ali", 2021, "Mers")
example2.showInfo();

let equal = example == example2
console.log(equal);

export { Parent };