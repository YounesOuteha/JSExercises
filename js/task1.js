/* 1. Create a script which checks to see if someone is old enough to by drive
    1.1 - 1st Way : Do it in a simple way
    1.2 - 2nd Way : I want to see at least one function
    1.3 - 3rd Way : I want to see a class
    Hint 1: Ask "How old are you?" by prompt
    Hint 2: Write console messages / alert messages "You can drive", "You can not drive", "need to start again" if the client enter a character! */


/* 1.1 - 1st Way : Do it in a simple way */
/*var age = prompt("Please enter your age!!!");

 if (age>= 18){
    alert("Congratulation, try to get a driving license")
}else{
    alert("Please wait until  you are 18 and go for a driving license");
} */

/* 1.2 - 2nd Way : I want to see at least one function */

$( document ).ready(function() {
    console.log( "ready!" );

let age = $('#age').val();
let btn = $('#btn');

function myFunction(age){
    debugger
    if (age>= 18){
        alert("Congratulation, try to get a driving license")
    }else{
        alert("Please wait until  you are 18 and go for a driving license");
    }
}
});