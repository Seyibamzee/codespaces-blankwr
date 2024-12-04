let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let room = document.querySelector('.room');
room.style.display="none";
let cheese = document.querySelector('.cheese');
cheese.style.display="none";
let burp= document.querySelector('.burp');
burp.style.display="none"
let eatCheese= document.querySelector('.eatCheese');
eatCheese.style.display="none";
let grabs = document.querySelector('.grabs');
grabs.style.display="none";
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
burp.style.display="block"

});
// cheese choice 1 
eatCheese.addEventListener('mouseenter', function()  {
text.innerHTML="When you try to talk to it it grabs you and you wered never found ";
room.style.display="none";
eatCheese.style.display="none";
grabs.style.display="block";
});
