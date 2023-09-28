


// task1

// const numberOfSeries= +prompt("How many series did you watch", "")

let numberOfSeries;

while (true) {
  const input = prompt("How many series did you watch", "");
  
  // Use parseInt to attempt to convert the input to a number
  numberOfSeries = parseInt(input);

  // Check if the conversion was successful and if the result is a number
  if (!isNaN(numberOfSeries)) {
    break; // Exit the loop if a valid number was provided
  }

  // Inform the user that their input was not valid
  alert("Please enter a valid number.");
}

// Now, numberOfSeries contains a valid numeric value
// console.log("Number of series watched: " + numberOfSeries);


// console.log(typeof numberOfSeries);


// task2

const filmsDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
}

// console.log(filmsDB);

// task3


const a = prompt("What is your last watched movie name"),
   b = prompt("How much score can you give");
   c = prompt("What is your last watched movie name");
   d = prompt("How much score can you give");

    filmsDB.series[a] = b;
    filmsDB.series[c] = d;

   
   
    console.log(filmsDB);