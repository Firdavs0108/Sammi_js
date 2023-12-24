
//  Function declaration **************************************************************


// function cityNames (city, country){
//     console.log("Thank you for choosing us. We love to travel "+ city + " which is located in " + country);
// }

// cityNames("Tashkent", "Uzbekistan!")




// Function Expression *****************************************************************

// const cityNames = function (city, country){
//     console.log("Thank you for choosing us. We love to travel "+ city + " which is located in " + country);
// }

// cityNames("Tashkent", "Uzbekistan!")

// Array Function  *****************************************************************


// const cityNames = (city, country)  => console.log("Thank you for choosing us. We love to travel "+ city + " which is located in " + country); 

// cityNames("Tashkent", "Uzbekistan!")



// Creating Object

const nextYearPlans = {
    name: "Firdavs",
    old: 23,
    major: "Web developer",
    plan1: "Find the new job",
    plan2: "Invest money to my parents and siblings",
    plan3: "Travel around some countries",
    plan4: "Establish IT course center",
    plan6: "Apply for Master",
    plan6: "Get marry",
        plans(){
            console.log("In Sha Allah, everything will happen just keep patience and do your best!! ");
        }    
}

// console.log(nextYearPlans);
// nextYearPlans.plans()

// const cloneObj = Object.assign({}, nextYearPlans)

const equalityTest = nextYearPlans == cloneObj

console.log(equalityTest);

// cloneObj.major = "Traveling"

// console.log(cloneObj);






