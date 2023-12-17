

// Asynchronous operation (simulating a promise)
function waitForFriend() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Friend has arrived!');
      }, 3000); // Simulating a delay of 3 seconds
    });
  }
  
  // Async function using await
  async function visitCoffeeShop() {
    console.log('Visiting the coffee shop...');
  
    // Using await to pause execution until the promise is resolved
    let result = await waitForFriend();
  
    console.log(result); // This line is executed when the promise is resolved
  
    console.log('Reading a book...'); // This line is executed after the promise is resolved
  }
  
  // Call the async function
  visitCoffeeShop();
  