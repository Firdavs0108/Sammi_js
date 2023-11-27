'use strict'
 
 
const box = document.querySelector("#box")
const buttons = document.querySelectorAll('button')
const circles = document.querySelectorAll('.circle')
const hearts = document.querySelectorAll('.heart')
const circle = document.querySelector('.circle')

const circleWrapper = document.querySelector('.circle__wrapper')

box.style.backgroundColor = 'red'
buttons[0].style.width = '100px'
circles[3].style.backgroundColor = 'green'
circle.style.backgroundColor = 'blue'


// hearts[2].style.color = 'green'

hearts.forEach((element) =>{
    element.style.backgroundColor = 'green'
})

//  const btn = document.createElement("button")

//  document.body.append(btn)

const myCircle = document.createElement('div')

myCircle.classList.add('circle')
// circleWrapper.append(myCircle)
// circleWrapper.before(myCircle)

circles[2].after(myCircle)