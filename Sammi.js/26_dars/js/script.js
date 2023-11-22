'use strict'

const background = document.querySelector('.promo__bg')

background.style.backgroundImage = 'url("img/1.jpg")';

const title = document.querySelector('.promo__genre')

title.textContent="COMEDY"

const promoImg = document.querySelectorAll('.promo__adv img ')

promoImg.forEach((element) =>{
    element.remove();
})



const serialList = document.querySelectorAll('.promo__interactive-list   ')

serialList.forEach((input, index)=>{
 return input[index]
})
 

