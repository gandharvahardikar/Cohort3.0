//Write a function that takes a user as an input and greets them with their name and age
function greet(user)

{
    console.log("hey \n" + user.name + "your age is \n " + user.age);
}

let user  = {
    name: "Gandharvaa",
     age: 20
    }

greet(user); 