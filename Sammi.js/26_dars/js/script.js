'use strict'

const background = document.querySelector('.promo__bg')

background.style.background = "url('./img/1.jpg') center center / cover no-repeat";


const promoImg = document.querySelectorAll('.promo__adv')

promoImg.forEach((element) =>{
    element.remove();
})


