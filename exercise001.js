const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Building on what you learnt in "JavaScript Promises & Asynchronous Programming",
// call the pre-written promise in exercise001.js using .then() and .catch()

promise
    .then((result) =>
    {
      console.log("Success all done!")
      // If the promise is successful,
      // write Yay! Promise resolved with response: to the console. Use string interpolation to add the actual response at the end.
      console.log("Yay! Promise resolved with response: " + result)
    })
    .catch((result) =>
    {
      console.log("Ooops a failure!")
      //If the promise fails, write Boo. Promise rejected with response: to the console.
      // Use string interpolation to add the actual response at the end.
      console.log(" Boo. Promise rejected with response: " + result)
    })
    .finally(() => console.log("Do some other random stuff"))
