
'use strict'

//this in functions *****************************

// function outerFunction(){
//     const outerVariable = "Hello I am from outerFunction"

//     function innerFunction(){
//         console.log(outerVariable);
//     }

//     return innerFunction()
// }

// outerFunction();



// this in objects **************************************************


// const obj = {
//     x: 10,
//     y: 19,
    
//     sum: function(){
//         console.log(this);
//     } 
// }

// obj.sum()




//this in constructors *******************************************

function myUniversity(name, studentId){
    this.name = name
    this.studentId = studentId
}

myUniversity.prototype.myMajor = function(myName){
    console.log("Hello everyone. My name is  " + myName+ ". My university name is " + this.name + ". and my studentId is " + this.studentId);
}

const student = new myUniversity("Gachon", 201939164)

// console.log(student);
student.myMajor("Firdavs")