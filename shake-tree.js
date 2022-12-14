function myFunction() {
  // location.reload();
   click();
}


//Hide tree and show present function after 30 Clicks
let xmasTreeSection = document.querySelector(".image-stack");
let presentSection = document.querySelector(".present-container");

let clickCount = 0;
let xmasTreeClick = document.querySelector("#xmas-tree-image");

xmasTreeClick.addEventListener("click", function () {

    if (clickCount  >50) {
    xmasTreeClick.style.display = 'none';
    presentSection.style.display = 'block';

      console.log(clickCount);
 }
      clickCount  = clickCount +1;
});



//$("#xmas-tree-image").click(function(){
//  clickCount = clickCount + 1;
//  alert("count")
//});
//
//if (clickCount > 3) {
//  (".image-stack").style.display = "none;"
//};
