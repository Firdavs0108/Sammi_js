

const btns = document.querySelectorAll('button')
  
btns[4].classList.add('red')
btns[4].classList.remove('red')
btns[4].classList.toggle('red')

console.log(btns[4].classList.contains('') ? "Yeap" : "No");

btns[4].addEventListener('click', () => {
    // if (!btns[5].classList.contains('red')) {
    //     btns[5].classList.add('red')
    // } else {
    //     btns[5].classList.remove('red')
    // }

    btns[5].classList.toggle('blue')
})


 