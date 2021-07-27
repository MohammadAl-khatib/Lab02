'use strict'

var name = prompt('Hello, what is your name?');
alert('Hi '+ name + ', welcome to my website, would you please answer my questions, just to get to know me');

let hobby = (prompt('Do I love swimming?')).toLowerCase();
if(hobby=="yes"||hobby=="no"||hobby=="y"||hobby=="n"){
switch (hobby){
    case 'yes':
        alert("ofcourse I love, who doesn't");
        // console.log('you are correct');
        break;
    case 'y':
            alert("ofcourse I love, who doesn't");
            // console.log('you are correct');
            break;
    default:
            alert("actually, I do like to swim");
}
} else{
    alert("please, enter only yes, no, y, or n");
}

let favDessert = (prompt('Is cake my favourit dessert?').toLowerCase());
if(favDessert=="yes"||favDessert=="no"||favDessert=="y"||favDessert=="n"){
switch (favDessert){
    case 'yes':
        alert("No, I like kunafa more, but cake is good too");
        // console.log('you are correct');
        break;
    case 'y':
            alert("No, I like kunafa more, but cake is good too");
            // console.log('you are correct');
            break;
    default:
            alert("You are right, I like kunafa more");
}
} else {alert("please, enter only yes, no, y, or n");}

let dream = (prompt('Am i going to become a professional programmer?').toLowerCase());
if(dream=="yes"||dream=="no"||dream=="y"||dream=="n"){
switch (dream){
    case 'yes':
        alert("Thanks, I hope you all the best");
        // console.log('you are correct');
        break;
    case 'y':
            alert("Thanks, I hope you all the best");
            // console.log('you are correct');
            break;
    default:
            alert("What you recommend to bocme one, you can tell me on alk20489@gmail.com");
}
}else {alert("please, enter only yes, no, y, or n");}

let favMovie = (prompt('Is The Lord of The Rings my favourit movie?').toLowerCase());
if(favMovie=="yes"||favMovie=="no"||favMovie=="y"||favMovie=="n"){
switch (favMovie){
    case 'yes':
        alert("Sorry, There Will Be Blood is much better");
        // console.log('you are correct');
        break;
    case 'y':
            alert("Sorry, There Will Be Blood is much better");
            // console.log('you are correct');
            break;
    default:
            alert("There Will Be Blood is my favourit");
}
}else {alert("please, enter only yes, no, y, or n");}

let travel = (prompt('Do I wish to see the deep oceans?').toLowerCase());
if(travel=="yes"||travel=="no"||travel=="y"||travel=="n"){
switch (travel){
    case 'yes':
        alert("It will be my best day");
        // console.log('you are correct');
        break;
    case 'y':
            alert("It will be my best day");
            // console.log('you are correct');
            break;
    default:
            alert("You must be kidding, it must be great to see");
}
}else {alert("please, enter only yes, no, y, or n");}