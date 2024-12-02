let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let room = document.querySelector('.room');
room.style.display="none";
let burp = document.querySelector('.burp');
burp.style.display="none";
let cheese = document.querySelector('.cheese');
cheese.style.display="none";
let eatCheese= document.querySelector('.eatCheese');
eatCheese.style.display="none";
// left left left left left left left left left left left left 

left.addEventListener('click', function()  {
    room.style.display="none"; 
    right.style.display="none";
    left.style.display="none";
eatCheese.style.display="block";
    room.style.display="block";
    leftRight.style.display="none";

   text.innerHTML="";
});

// left choice 1 left choice 1 left choice 1 left choice 1 left choice 1 left choice 1 
room.addEventListener('dblclick' , function() {
 text.innerHTML="that was good";
 room.style.display="none";
 burp.style.display="block";
});
// cheese choice 1 
eatCheese.addEventListener('mouseenter', function()  {
text.innerHTML="that cheese was good";

});
