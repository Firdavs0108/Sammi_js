'use strict'

const background = document.querySelector('.promo__bg')

background.style.background = "url('./img/1.jpg') center center / cover no-repeat";

const title = document.querySelector('.promo__genre')

title.textContent="COMEDY"

const promoImg = document.querySelectorAll('.promo__adv img ')

promoImg.forEach((element) =>{
    element.remove();
})



const serialList = document.querySelectorAll('.promo__interactive-item')

serialList.forEach((input, index)=>{
 return input[index]
})
 

