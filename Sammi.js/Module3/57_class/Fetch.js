
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json',
    },
    body: JSON.stringify({name: 'firdavs'}),
})
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(()=>{
        console.log("The end..");
    })

