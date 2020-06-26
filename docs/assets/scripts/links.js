//js to take the cards on index page and turn them into clickable links for each sub-page

const lucha = document.getElementById('lucha');
const flyers = document.getElementById('flyers');
const scifi = document.getElementById('scifi');
const music = document.getElementById('music');
const vector = document.getElementById('vector');


lucha.addEventListener('click', function(event){
    window.location.href="lucha.html";
})
flyers.addEventListener('click', function(event){
    window.location.href="flyers.html";
})
scifi.addEventListener('click', function(event){
    window.location.href="scifi.html";
})
music.addEventListener('click', function(event){
    window.location.href="music.html";
})
vector.addEventListener('click', function(event){
    window.location.href="vector.html";
})


