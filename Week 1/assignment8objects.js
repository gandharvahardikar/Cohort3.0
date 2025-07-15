//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user)

{
 let prefix;
 
 if(user.gender === "male")
 {
    prefix ="Mr.";
 } else if (user.gender === "female")
   {prefix = "Mrs.";

   } else {
    prefix = "Others";
   }

   console.log("Hi" + prefix + " " + user.name + ",  your age is " + user.age + ".");
   
   
} let user = {
    name: "Harkirat",
    age: 21,
    gender: "male"
    };

greet(user);

