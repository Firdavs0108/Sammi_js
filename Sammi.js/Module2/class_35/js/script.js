'use strict';

const btn = document.querySelector('#btn ')

function myAnimation(){
  const car = document.querySelector('.car')
  let pos = 0;

  const timerId = setInterval(frame,10   )

  function frame(){
   if (pos === 700) {
     clearInterval(timerId);
   } else {
     pos++
     car.style.left = pos + 'px';
   }
  }

}


btn.addEventListener('click', myAnimation)
 
// clearInterval(timeId)


// function logger(){
//   if(i == 3){
//     clearInterval(timeId)
//   }
//   console.log("set this out");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello log");
//   id = setTimeout(log,500)
// }, 500)




setTimeout(function() {
  console.log('This message will appear after 2000 milliseconds (2 seconds).');
}, 5000);


























// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);
