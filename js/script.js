$(document).ready(function () {
  var imgString = "and I make web applications work beautifully!";
  write(imgString);

  $('td img').mouseover(function() {
    if (('#folio').length > 0) {
      $('#folio').remove();
    }
    $img = $(this).attr('src');
    $('.portfolio-large').append("<img id='folio' src='"+$img+"'>");
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