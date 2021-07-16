const love = ["When I tell you I love you, I don’t say it out of habit. I say it to remind you that you’re the best thing that ever happened to me. ","I love you for all that you are, all that you have been and all that you’re yet to be.","And suddenly, all the love songs were about you.","I love you more than I could ever really say.","I wish I could turn back the clock. I’d find you sooner and love you longer.","I didn’t know it was possible to love everything about someone until I met you.","Have I mentioned how lucky I am to love you?","I’m so grateful I get to love you.","Falling in love with you was the easiest thing I’ve done in my life.","When you fall in love with someone’s personality, everything about them becomes beautiful.","I fancy the way your eyes shine when you smile.","I totally, utterly and completely fancy you.","There will come a time in your life when you fancy a single soul. This is that time for me.","I fancy the way your eyes hold stories and the experiences your heart has had.","I fancy the way your laugh can light up my day.","I wish you could see yourself through my eyes, then maybe you’d understand why I fancy you.","I fancy you and all of the wonderful things you’ve brought into my life.","Fancying you is one of my favorite things to do.","The day I met you, I found the piece of me I didn’t know was missing. I fancy you, this relationship and the better part of me you brought out.","I fancy you.","You are artwork I could admire forever.","Humor, honesty, and patience are the traits I admire about you..","Never lose sight of who you are, for that is the person I fell in love with and will always admire.","I admire your honesty, your kindness and above all, your heart.","Your beauty attracted me, but I admire you for the person you are and the joy you’ve brought to my life.","I admire you for the wonderful person I’ve watched you become.","You know me so well, inside out. Your deep acceptance of me is what I admire most about you.","I admire the way you handle every challenge that is thrown your way. I’m proud of you.","As time goes on, my love and admiration for you have increased tenfold.","You continue to be someone I love, admire and respect without hesitation." ,""]


const btn = document.getElementById("btn");
const word = document.querySelector(".generate");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  word.textContent = love[randomNumber];
});




function getRandomNumber() {
  return Math.floor(Math.random() * love.length);
}

var startDateTime = new Date(2021,5,22,23,59,59,0);
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    
    document.getElementById("time-elapsed").innerHTML = "we are together for " + d+" day(s), "+h+" hour(s), "+m+" minute(s), "+s+" second(s) ";
}

timer = setInterval(updateClock, 1000);