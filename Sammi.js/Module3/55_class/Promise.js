

const myPromise = new Promise((reslove, reject) =>{
    const operationWasSuccessful = true;

    if (operationWasSuccessful) {
        reslove('Operation completed successfully!')
    } else{
        reject('Operation failed!!')
    }
})

myPromise
    .then((result) =>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

