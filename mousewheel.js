$(window).on('scroll', function() {
    $("#landing").css("left", -$(window).scrollTop());
  });