import { Parent } from "./parent.mjs";

class Child extends Parent{
    constructor(name, year, model,color){
        super(name,year,model)
        this.color = color;
    }

   getInfor() {
       console.log("Hello " + this.name + "  This color is " + this.color); 
    }
   
}

let exam = new Child("Fredrick", 2010, "BMW", "Blue")
exam.showInfo()
exam.getInfor()
