
//AXIOS..................................................................

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



  //FETCH...............................................................

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response. status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data with fetch:', data);
  })
  .catch(error => {
    console.error('Error with fetch:', error.message);
  });

