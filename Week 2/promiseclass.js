//Promise class
//Calling a promise is easy, defining your own promise is where things get hard
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
// Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner 
// and more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.


/////////////////

//using a function that returns a promise


function setTimeoutPromisified(ms) // ms is miliseconds here
    {
     return new Promise(resolve => setTimeout(resolve, ms));
    }

function callback()
    {
    console.log("3 Seconds have passed");
    }
setTimeoutPromisified(3000).then(callback)