
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`div[data-key="${e.keycode}"]`);
    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) =>
    key.addEventListener('transitionend', removeTransition)
);
window.addEventListener('keydown', playsound);

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