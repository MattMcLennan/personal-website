$(document).ready(function () {
  var imgString = "and I make elegant web applications!";
  write(imgString);

  // // The function actually applying the offset
  // $('a[href="#portfolio"]').on('click', function() {
  //   function offsetAnchor() {
  //     if(location.hash.length !== 0) {
  //       window.scrollTo(window.scrollX, window.scrollY - 25);
  //     }
  //   }
  //   // This will capture hash changes while on the page
  //   $(window).on("hashchange", function () {
  //     offsetAnchor();
  //   });

  //   // This is here so that when you enter the page with a hash,
  //   // it can provide the offset in that case too. Having a timeout
  //   // seems necessary to allow the browser to jump to the anchor first.
  //   window.setTimeout(function() {
  //     offsetAnchor();
  //   }, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).
  // });


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