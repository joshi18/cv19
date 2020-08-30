var numberofbuttons=document.querySelectorAll(".drum").length;

for(var i = 0;i<numberofbuttons;i++){
  document.querySelectorAll("button")[i].addEventListener("click",handle);
  function handle(){
  var buttonInnerHtml = this.innerHtml
  switch(buttonInnerHtml){
    case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

  }
  }

}
