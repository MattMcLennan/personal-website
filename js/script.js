$(document).ready(function () {
  var imgString = "and I make elegant web applications!";
  write(imgString);

  $('td img').mouseover(function() {
    $('.portfolio-large img').css("display","block");
    $img = $(this).attr('src');
    $('.portfolio-large img').attr("src",$img);
  });

})

// This function writes the cool text on the main image
// seem like someone is typing it live 
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