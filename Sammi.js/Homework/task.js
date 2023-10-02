const numSerial = +prompt('How many serials do you watch in a week?')

if(numSerial <= 5){
    console.log('Less watcher');
} else if (numSerial <= 10) {
    console.log('Good watcher');
}else{
    console.log('Best watcher');
}