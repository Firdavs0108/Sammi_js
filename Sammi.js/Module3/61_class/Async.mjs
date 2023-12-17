
async function fetchData(){
    try{
        //Make an API request
        let response = await fetch('https://api.example.com/data');

        //Check if the request was seccessful (status code in the range 200-299)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        // Parse the response as JSON
        let data = await response.json();

        //Process the data

        console.log(data);
    } catch(error){
        //Hnadle errors
        console.error('Error fetching data:', error.message)
    }
}

//Call the async function

fetchData()