'use strict'

document.addEventListener('DOMContentLoaded', () => {


    const background = document.querySelector('.promo__bg')
    const title = document.querySelector('.promo__genre')
    const seriesList = document.querySelector('.promo__interactive-list');
    const promoImg = document.querySelectorAll('.promo__adv img ');
    const addForm = document.querySelector('form.add')
    const inputVal = addForm.querySelector('.adding__input')
    const checkbox = addForm.querySelector("[type = 'checkbox']");
    
    const seriesDB = {
        series:[
            'Omar',
            'Omar2',
            'Omar3',
            'Omar4',
            'Omar5',
        ]
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const newSeries = inputVal.value
        const favourite = checkbox.checked

            if(newSeries){
               if (favourite ){
                
               }

                seriesDB.series.push(newSeries)
                sortArr(seriesDB.series)
                createSeriesList(seriesDB.series, seriesList)

            }
        event.target.reset()
    })

    const makeChange = () => {
        background.style.backgroundImage = 'url("img/1.jpg")';
        title.textContent="COMEDY"
    }
    
    
    const sortArr = (arr) =>{
        arr.sort()
    }

    
    const removeApp = (arr) => {
        promoImg.forEach((element) =>{
            element.remove();
        })
    }
    
    const createSeriesList = (series, parent) =>{

        parent.innerHTML = ''

         series.forEach((item, idx) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${idx + 1}. ${item} 
                    <div class="delete"></div>
                </li>
            `;
        });

    }
    
    sortArr(seriesDB.series)
    removeApp(promoImg);
    makeChange();
    createSeriesList(seriesDB.series, seriesList)

})



  

