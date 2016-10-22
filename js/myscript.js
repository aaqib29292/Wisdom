$(document).ready(function () {


  var topoffset = 50;
  // scrollspy
  $('body').scrollspy({
     target: '.navbar-fixed-top',
     offset: topoffset
    })


  var hash = $(this).find("li.active a").attr("href");
  if(hash != "#featured") {
    $('header nav').addClass("inbody");
  } else {
    $('header nav').removeClass("inbody");
  }



  $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    var hash = $(this).find("li.active a").attr("href");
    if(hash != "#featured") {
      $('header nav').addClass("inbody");
    } else {
      $('header nav').removeClass("inbody");
    }
  })

  // carousel

  $('#featured').carousel({
    interval: false
  });


});
