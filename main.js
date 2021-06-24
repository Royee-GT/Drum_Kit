//when page loads
window.onload = function() {
  var pressedKey;
  var charKey;
  //watch for keyboard presses
  document.addEventListener(
    "keydown",
    function(event) {
      //assign keyboard presses to a variable
      pressedKey = event.keyCode;
      charKey = String.fromCharCode(pressedKey);
      //console.log(pressedKey);
      //console.log(charKey);

      var getKeyPress = function(press) {
        var div = document.getElementById(press);

        if (div) {
          //highlights pressed key
          div.classList.add("playing");
          //unhighlights pressed key
          window.setTimeout(function() {
            div.classList.remove("playing");
          }, 200);
        } //IF
        //get correct audio using pressed key
        var audio = document.getElementById(pressedKey);
        //plays audio
        audio.play();
        //gets rid of delay between presses
        audio.currentTime = 0.01;
      }; //GETKEYPRESS FUNC

      getKeyPress(charKey);
    },
    false
  ); //KEYPRESS EVENT LISTENER
  
  
  /*
  //watch for mouse clicks
      document.addEventListener('mousedown', function(event) { 
       var clicked = document.getElementById('A');
          clicked.onclick = function(){
            this.classList.add("playing");
            window.setTimeout(function() {
            clicked.classList.remove("playing");
          }, 200);
            
        var audio2 = document.getElementById(65);
        audio2.play();
        audio2.currentTime = 0.01;
        }//ONCLICK FUNC
    }, false); //MOUSECLICK LISTENER   
    */
  
}; //WINDOW ONLOAD FUNC
