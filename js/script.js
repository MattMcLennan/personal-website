$(document).ready(function () {
  var imgString = "Hi, my name is Matthew McLennan and I make web applications work beautifully!";
  
  function write(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
      (function type(i) {
        setTimeout(function () {
          // Write now this function just writes each 
          result += string[i];
          // console.log(result);
          $("#img-txt").text(result);
        }, i * 125);
      })(i);
    }
  }

  write(imgString);
})