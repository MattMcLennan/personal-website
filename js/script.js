$(document).ready(function () {
  var imgString = "Hi, my name is Matthew McLennan and I make web applications work beautifully!";

  function write(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
      (function type(i) {
        setTimeout(function () {
          result += string[i];
          $("#img-txt").text(result);
        }, i * 125);
      })(i);
    }
  }

  write(imgString);
})