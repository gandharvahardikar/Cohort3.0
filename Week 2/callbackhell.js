// Q: Write code that
//logs hi after 1 second
//logs hello 3 seconds after step 1
//logs hello there 5 seconds after step 2

setTimeout(function()
{
    console.log("hey");
   setTimeout(function()
 {
    console.log("hello");

 setTimeout(function()
   {
     console.log("hello there");
   }, 5000);// writing this numbers refer to after how much time output should be logged

  },3000);

},1000);
