function myFunction() {
  // location.reload();
   click();
}

//Hide tree and show present function after 30 Clicks
let startContainer = document.querySelector(".initiate-message-container");
let startButton = document.querySelector("#start-button");

let startMessageContainer = document.querySelector(".start-message-container");
let xmasTreeSection = document.querySelector(".image-stack");

let presentMessageContainer = document.querySelector(".present-message-container");
let presentSection = document.querySelector(".present-container");
let readMessageButton = document.querySelector("#letter-button");

let myMessageContainer = document.querySelector(".my-message-container");


let clickCount = 0;
let xmasTreeClick = document.querySelector("#xmas-tree-image");

var audioTreeClick = new Audio("music/tree-shake.mp3");
var audioPresent = new Audio("music/xmassong2.mp3");
var xmasMusic = new Audio("music/xmassong1.mp3");
var messageMusic = new Audio("music/lastsong.mp3");


//After click im ready to start to trigger music and show xmas tree
startButton.addEventListener("click", function () {
    xmasMusic.play();
    startContainer.style.display = 'none';
    startMessageContainer.style.display = 'block';
    xmasTreeSection.style.display = 'block';
 });

//after 50 click trees show present
xmasTreeClick.addEventListener("click", function () {
    audioTreeClick.play();
    if (clickCount > 50) {
    startMessageContainer.style.display = 'none';
    xmasTreeClick.style.display = 'none';
    presentMessageContainer.style.display = 'block';
    presentSection.style.display = 'block';

      console.log(clickCount);
    xmasMusic.pause();
    audioPresent.play();

 }
      clickCount  = clickCount +1;

});


//after click read letter startButton



readMessageButton.addEventListener("click", function () {
  presentMessageContainer.style.display = 'none';
  presentSection.style.display = 'none';
  myMessageContainer.style.display = 'block';
  audioPresent.pause();
  messageMusic.play();

});
