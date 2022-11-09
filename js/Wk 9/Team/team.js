
function playsound(e){

    // const audio = document.querySelector(
    //     'audio[data-key="${e.keycode}"]'
    // );
    // const keyCountainer = document.querySelector(
    //     'audio[data-key="${e.keyCode}"]');

    audio.play();
}

window.addEventListener('keydown', playsound(Event));

// var numberOfButtons = document.querySelectorAll(".button").length;
  
// for (var j = 0; j < numberOfButtons; j++) {
  
//   document.querySelectorAll(".button")[j]
//     .addEventListener("click", function() {
//       var buttonStyle = this.innerHTML;
//       sound(buttonStyle);
//       animation(buttonStyle);
//   });
// }

// document.addEventListener("keypress", function(event) {
//     sound(event.key);
//     animation(event.key);
//   });
// //animation for keys
//   function animation(currentKey) {
//     var activeButton = document.querySelector("." + currentKey);
    
//     activeButton.classList.add("animation");
    
//     setTimeout(function() {
//       activeButton.classList.remove("animation");
//     }, 100);
//   }