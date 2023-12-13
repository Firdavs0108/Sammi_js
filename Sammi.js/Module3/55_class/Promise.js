

// const myPromise = new Promise((resolve, reject) =>{
//     const operationWasSuccessful = true;

//     if (operationWasSuccessful) {
//         resolve('Operation completed successfully!')
//     } else{
//         reject('Operation failed!!')
//     }
// })

// myPromise
//     .then((result) =>{                       //true situation
//         console.log(result);
//     })
//     .catch((error)=>{                       //false situation
//         console.log(error);
//     })
//     .finally(()=> {                           //whatever true or false
//         console.log("Thank you!");
//     })


    // console.log("Request data...");

    // setTimeout(() =>{
    //     console.log("Processing data...");

    //     const product ={
    //         name: 'car',
    //         color: 'blue'
    //     }

    //     setTimeout(()=>{
    //         product.status = 'order'
    //         console.log(product);
    //     }, 2000)
    // },2300)

    const request = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(),time)
        })
    }

    // request(1000).then(() => console.log("Request 1000ms"))
    // request(4000).then(()=> console.log("Request 4000ms"))
    // request(5000).then(()=> console.log("Request 5000ms"))

    ///all method

    // Promise.all([request(1000), request(3000), request(5000)]).then(()=>
    // console.log('Please wait...')).finally(() =>{
    //     setTimeout(()=>{
    //         console.log("Finished");
    //     }, 5000);
    // })



    //race method

    Promise.race([request(1000), request(3000), request(5000)]).then(()=>
    console.log("Wait a moment...")) . finally(()=>{
        setTimeout(()=> {
            console.log("Welcome to our channel!!");
        },4000)
    })

    


