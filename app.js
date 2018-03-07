$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - $('.fixed-top').outerHeight() - 20
          }, 800);
          return false;
        }
      }
    });
  });



$(document).ready(function() {
  $('.content').css('margin-top', $('.fixed-top').outerHeight());
});

$(window).resize(function() {
  $('.content').css('margin-top', $('.fixed-top').outerHeight());
});