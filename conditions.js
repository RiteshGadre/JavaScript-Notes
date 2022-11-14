// If condition
let x=5;
if(x==5) console.log(x);

// if else
let percent= 36;
if(percent>=36) console.log("Pass");
else console.log("Fail");

// if else with multiple conditions
let age= 23;
if(age>60) console.log("Old");
else if(age>30) console.log("Adult");
else if(age>17) console.log("Young");
else console.log("Child");

// Nested if else
let currAge=18, currStatus= true;
if(currAge>=18){
    if(currStatus) console.log("Player can play with team"); 
    else console.log("Player can't play with team");
}
else{
    if(currStatus) console.log("You can practice to enter in team");
    else console.log("You can't Paractice");
}

// Switch
let grade= 1;
switch(grade){
    case 1:
    console.log("Grade A");
    break;

    case 2:
    console.log("Grade B");
    break;

    case 3:
    console.log("Grade C");
    break;

    default:
    console.log("Grade E");
}