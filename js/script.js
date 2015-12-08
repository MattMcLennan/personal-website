$(document).ready(function () {
  var imgString = "Hi, my name is Matthew McLennan and I make web applications work beautifully!";
  
  function write(string) {
    for (var i = 0; i < string.length; i++) {
      (function type(i) {
        setTimeout(function () {
          console.log(string[i]+" ");
          var time = new Date();
          console.log(time);
        }, i * 200);
      })(i);
    }
  }

  write(imgString);

})