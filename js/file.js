new WOW().init();

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if(wScroll >= $('.skill-full').offset().top-($(this).height())){
    $('.skill-full').find('li').addClass('active');
  }
});
$(window).ready(function() {
  if($(this).width()>=768){
    $('.portImg').find('li').addClass('animated fadeInUp animated');
    var normalLength = $('.scrollable').width();
    var dumb = $(this).width()/2;
    var temp = dumb/1.95619335347432;
    $('.portWeb').find('li').css('maxHeight', temp);
  }else{
    var normalLength = $('.scrollable').width();
    var dumb = normalLength*0.8;
    var temp = dumb/2.037926409877949;
    $('.portWeb').find('li').css('maxHeight', temp);
    $('.portWeb').each(function() {
      $(this).children().width(normalLength*0.8).css('marginRight','15px');
      var length = $(this).children().length;
      var wid = $(this).children().eq(0).outerWidth(true);
      $(this).width(length*wid).parent().css('overflowX','auto');
    });
    $('.portImg').each(function() {
      if($(window).width()<=480){
        $(this).children().width(normalLength*0.8).css('marginRight','15px');
      }
      var length = $(this).children().length;
      var wid = $(this).children().eq(0).outerWidth(true);
      $(this).width(length*wid).parent().css('overflowX','auto');
    });
  }
  // console.log($('.portImg').children().eq(0));
});
