//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age)

{
    if (age > 18)
     {
        return true;
     }

     else {
        return false;
     }

}
    let ans = canVote(20);
     console.log("You can vote");