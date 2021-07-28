'use strict'

var name = prompt('Hello, what is your name?');
alert('Hi '+ name + ', welcome to my website, would you please answer my questions, just to get to know me');
let counter = 0;
// Question #1
function guessHobby(){
let hobby = (prompt('Do I love swimming?')).toLowerCase();
if(hobby=="yes"||hobby=="no"||hobby=="y"||hobby=="n"){
switch (hobby){
    case 'yes':
        alert("ofcourse I love, who doesn't");
        counter++;
        // console.log('you are correct');
        break;
    case 'y':
            alert("ofcourse I love, who doesn't");
            counter++;
            // console.log('you are correct');
            break;
    default:
            alert("actually, I do like to swim");
}
} else{
    alert("please, enter only yes, no, y, or n");
}
}

//Question #2
function guessDessert(){
let favDessert = (prompt('Is cake my favourit dessert?').toLowerCase());
if(favDessert=="yes"||favDessert=="no"||favDessert=="y"||favDessert=="n"){
switch (favDessert){
    case 'yes':
        alert("No, I like kunafa more, but cake is good too");
        break;
    case 'y':
            alert("No, I like kunafa more, but cake is good too");
            counter++;
            break;
    default:
            alert("You are right, I like kunafa more");
            counter++;
             // console.log('you are correct');
}
} else {alert("please, enter only yes, no, y, or n");}
}

//Question #3
function guessDream(){
let dream = (prompt('Am i going to become a professional programmer?').toLowerCase());
if(dream=="yes"||dream=="no"||dream=="y"||dream=="n"){
switch (dream){
    case 'yes':
        alert("Thanks, I hope you all the best");
        counter++;
        // console.log('you are correct');
        break;
    case 'y':
            alert("Thanks, I hope you all the best");
            counter++;
            // console.log('you are correct');
            break;
    default:
            alert("What you recommend to bocme one, you can tell me on alk20489@gmail.com");
}
}else {alert("please, enter only yes, no, y, or n");}
}

//Question #4
function guessMovie(){
let favMovie = (prompt('Is The Lord of The Rings my favourit movie?').toLowerCase());
if(favMovie=="yes"||favMovie=="no"||favMovie=="y"||favMovie=="n"){
switch (favMovie){
    case 'yes':
        alert("Sorry, There Will Be Blood is much better");
        break;
    case 'y':
            alert("Sorry, There Will Be Blood is much better");
            break;
    default:
            alert("There Will Be Blood is my favourit");
            counter++;
        // console.log('you are correct');
}
}else {alert("please, enter only yes, no, y, or n");}
}

//Question #5
function guessDestination(){
let travel = (prompt('Do I wish to see the deep oceans?').toLowerCase());
if(travel=="yes"||travel=="no"||travel=="y"||travel=="n"){
switch (travel){
    case 'yes':
        alert("It will be my best day");
        counter++;
        // console.log('you are correct');
        break;
    case 'y':
            alert("It will be my best day");
            counter++;
            // console.log('you are correct');
            break;
    default:
            alert("You must be kidding, it must be great to see");
}
}else {alert("please, enter only yes, no, y, or n");}
}

// Lab03
//game1
function guessNumber(){
alert("now we will play a game");

for (let i=0; i<4; i++)
{
 let guessNumber = Number (prompt("guess the secret number?"));
 if(guessNumber>4){
 alert("too high");
 }else if(guessNumber<4)
 {
 alert("too low");
 }else if(guessNumber==4){
    alert("congrats, you win");
    counter++;
    // console.log('you are correct');
    break; 
 }else{
    alert('please only numbers allowed')
 }
if (i==3 && guessNumber!==4)
 {
alert ("you lose, the secret number is 4")
 }
}
}

// game2
function guessHobbies(){
alert("lets play another game");
let hobbies = ['swimming','reading','video games'];

outerloop :for (let i=0; i<6; i++)
{
let guessHobby = prompt('what is my hobby?')
 for (let x=0; x<hobbies.length;x++)
 {
  if (guessHobby===hobbies[x])
  {
  alert("you win");
  counter++;
  // console.log('you are correct');
  break outerloop;
  }
 }
}

alert('my hobbies are swimming, reading, and video games');
alert('your total score is '+counter);
}

guessHobby();
guessDessert();
guessDream();
guessMovie();
guessDestination();
guessNumber();
guessHobbies();
