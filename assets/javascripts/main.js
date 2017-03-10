$(document).ready(function(){
  var heightTopNavigation = $(".topNavigation").height();
  var winWidth = $(window).width();
  var refWinWidth = 1200;
  var refWinWidthMid = 992;

  if (refWinWidth > winWidth) {
    $(".toggleMenu__here").css("display","none");
    $(".toggleMenu__open").css("display","inherit");
    $(".toggleMenu__close").css("display","none");
  } else {
    $(".toggleMenu__here").css("display","inherit");
    $(".toggleMenu__open").css("display","none");
    $(".toggleMenu__close").css("display","none");
  }
  if (refWinWidthMid > winWidth) {
    $(".aboutMe__Left").css("text-align","left");
  } else {
    $(".aboutMe__Left").css("text-align","right");
  }

  $(".divPaddingTop").each(function(){
    $(this).css( "padding-top" , heightTopNavigation);
  });

  $(window).resize(function(){
    winWidth = $(window).width();
    if (refWinWidth > winWidth) {
      $(".toggleMenu__here").css("display","none");
      $(".toggleMenu__open").css("display","inherit");
      $(".toggleMenu__close").css("display","none");
    } else {
      $(".toggleMenu__here").css("display","inherit");
      $(".toggleMenu__open").css("display","none");
      $(".toggleMenu__close").css("display","none");
      $(".logo").css("display","inherit");
    }
    if (refWinWidthMid > winWidth) {
      $(".aboutMe__Left").css("text-align","left");
    } else {
      $(".aboutMe__Left").css("text-align","right");
    }
    heightTopNavigation = $(".topNavigation").height();
    $(".divPaddingTop").each(function(){
      $(this).css( "padding-top" , heightTopNavigation);
    });
  });
  $(window).click(function(){
    heightTopNavigation = $(".topNavigation").height();
    $(".divPaddingTop").each(function(){
      $(this).css( "padding-top" , heightTopNavigation);
    });
  });
  $(".hamburger").click(function(){
    $(".logo").css("display","none");
    $(".toggleMenu__here").css("display","inherit");
    $(".toggleMenu__open").css("display","none");
    $(".toggleMenu__close").css("display","inherit");
  });
  $(".cross").click(function(){
    $(".toggleMenu__here").css("display","none");
    $(".toggleMenu__open").css("display","inherit");
    $(".toggleMenu__close").css("display","none");
    $(".logo").css("display","none");
  })

});
