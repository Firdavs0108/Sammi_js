'use strict';

const uzs = document.querySelector('#usz');
const usd = document.querySelector('#usd');

console.log(usz);

uzs.addEventListener('input', (e) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'json/current.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            usd.value = (+uzs.value / data.current.usd).toFixed(2); // Corrected placement of toFixed(2)
        } else {
            usd.value = 'Something went wrong';
        }
    });
});

 
