//assignment for promisified version of callback hell

function setTimeoutPromisified(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function()
{
    console.log("India is my Country");

    setTimeoutPromisified(3000).then(function()
    {
        console.log("hello");
    

     setTimeoutPromisified(5000).then(function()
        {
           console.log("hello there");
        });
    });
});        
