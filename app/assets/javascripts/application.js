// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(window).on("load",function () {
  var imgString = "and I make elegant web applications!";
  write(imgString);

  $('.small-images img').mouseover(function() {
    $('.core, .foodmap, .stocks').css("display","none");
    var selectedImage = $(this).attr("alt");
    $("."+selectedImage).css("display","block");
  });
})

// This function writes the text on the main image
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