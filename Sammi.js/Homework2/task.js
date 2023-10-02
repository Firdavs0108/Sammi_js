

//Task 3

const numSerial = +prompt('How many serials do you watch in a week?')

// if(numSerial <= 5){
//     console.log('Less watcher');
// } else if (numSerial <= 10) {
//     console.log('Good watcher');
// }else{
//     console.log('Best watcher');
// }

//Task1/2

const dbSeries = {
    series: {}
}

for (let i = 0; i<2; i++){
    const   a = prompt("What is your last watched movie name"),
            b = prompt("How much score can you give");
        
            if (a != null && b != null && a != "" && b != "") {
                dbSeries.series [a] = b;
                 console.log('Done');
            } else {
                console.log('ERROR, Try again');
                i--
            }
                
}

console.log(dbSeries);

