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
  console.log("loaded");

  //Use smooth scrolling when clicking on navigation from CSS-Tricks

  $('.navbar a[href*="#"]:not(a[href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  // carousel

  $('#featured').carousel({
    interval: false
  });


});
