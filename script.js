$(document).ready(function () {
  var imgString = "and I make elegant web applications!";
  write(imgString);

  $('.small-images img').mouseover(function() {
    $('.core, .foodmap, .stocks').css("display","none");
    var selectedImage = $(this).attr("alt");
    $("."+selectedImage).css("display","block");
  });
})

// This function writes the cool text on the main image
// seem like someone is typing it live 
function write(string) {
  var result = "Hi, I am Matthew McLennan ";
  for (var i = 0; i < string.length; i++) {
    (function type(i) {
      setTimeout(function () {
        result += string[i];
        $("#img-txt").text(result);
      }, i * 125);
    })(i);
  }
}