$(document).ready(function () {
  var imgString = "and I make web applications work beautifully!";

  function write(string) {
    var result = "Hi, my name is Matthew McLennan ";
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

  $('td img').mouseover(function() {
    debugger
  });

})