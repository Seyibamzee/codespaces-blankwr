let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let room = document.querySelector('.room');
room.style.display="none";
let cheese = document.querySelector('.cheese');
cheese.style.display="none";
let burp= document.querySelector('.burp');
burp.style.display="none";
let eatCheese= document.querySelector('.eatCheese');
eatCheese.style.display="none";
let grabs = document.querySelector('.grabs');
grabs.style.display="none";
let shut = document.querySelector('.shut');
shut.style.display="none";
let hides = document.querySelector('.hides');
hides.style.display="none";
eatPizza = document.querySelector('.eatPizza');
eatPizza.style.display="none";
let dead = document.querySelector('.dead');
dead.style.display="none";
// left left left left left left left left left left left left 

left.addEventListener('click', function()  {
    room.style.display="none"; 
    right.style.display="none";
    left.style.display="none";
eatCheese.style.display="block";
    room.style.display="block";
    leftRight.style.display="none";
   text.innerHTML="As you tried to open the closet a hand came out and grabbbed the door ( Double click to run out or find chesse to talk to it)";
   grabs.style.display="none";
});

// left choice 1 left choice 1 left choice 1 left choice 1 left choice 1 left choice 1 
room.addEventListener('dblclick' , function() {
 text.innerHTML="You ran into your parents room woke them up and told them everything and they checked but found nothing so now they try to keep you occupied";
 room.style.display="none";
burp.style.display="block";

});
// cheese choice 1 
eatCheese.addEventListener('mouseenter', function()  {
text.innerHTML="When you try to talk to it it grabs you and you wered never found ";
room.style.display="none";
eatCheese.style.display="none";
grabs.style.display="block";
});

//right right right right right right right right right right right 
right.addEventListener('click', function() {
    room.style.display="none"; 
    right.style.display="none";
    left.style.display="none";
eatCheese.style.display="none";
leftRight.style.display="none";
    shut.style.display="block";
   text.innerHTML="As you tried to open the door it shuts in your face  ( Double click to hide under your blanket or find pizza to scream)";
   eatPizza.style.display="block";
});
// right choice 1 right choice 1 right choice 1 right choice 1 
shut.addEventListener('dblclick' , function() {
    hides.style.display="block";  
    shut.style.display="none";  
    text.innerHTML="You hid under your blanket and the monster left you alone but the sracthing continued until morning ";
});
// pizza choice 1 
eatPizza.addEventListener('mouseenter', function()  {
    shut.style.display="none";   
dead.style.display="block";
eatPizza.style.display="none";
text.innerHTML="When you screamed the monster grabbed you and ate you  ";
});
