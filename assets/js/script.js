$(function () {
  $(window).on('load resize', function() {
    $(function() {
      var height=$(".l-header").height();
      var wheight=window.innerHeight;
      var modalHeight=$(".l-header-right").height();
      //ヘッダーの高さ分だけコンテンツを下げる
      $(".l-content").css("margin-top", height);
      if ($(window).width() <= 1000) {
        $('.l-header-right').removeClass('active');
        $(".l-header-right").css({
          display: "none",
          marginBottom: modalHeight
        });
        $('#hamburgerBtn span:nth-of-type(1)').css({
          transform: "",
          top: ""
        });
        $('#hamburgerBtn span:nth-of-type(2)').css('width', '');
        $('#hamburgerBtn span:nth-of-type(3)').css({
          transform: "",
          top: ""
        });
        $(".l-header-right").css("height", wheight-height);
        $(".l-header-right").css("margin-top", -3);
      } else {
        $('.l-header-right').removeClass('active');
        $(".l-header-right").css("display", "flex");
        $(".l-header-right").css("height", height);
        $(".l-header-right").css("margin-top", 0);
      }
      return true;
    });
  });

  $('#hamburgerBtn').click(function () {
    var spanHeight = $('#hamburgerBtn span:nth-of-type(2)').position().top;
    $('.l-header-right').toggleClass('active');
    if ($('.l-header-right').hasClass('active')) {
      $('.l-header-right').addClass('active');
      $('.l-header-right').css({
        display: "block"
      });
      $('#hamburgerBtn span:nth-of-type(1)').css({
        top: spanHeight,
        transform: "rotate(45deg)",
        transition: "0.3s ease-out"
      });
      $('#hamburgerBtn span:nth-of-type(2)').css({
        width: 0,
        transition: "0s ease-out"
      });
      $('#hamburgerBtn span:nth-of-type(3)').css({
        top: spanHeight,
        transform: "rotate(-45deg)",
        transition: "0.3s ease-out"
      });
    } else {
      $('.l-header-right').removeClass('active');
      $('.l-header-right').css({
        display: "none",
      });
      $('#hamburgerBtn span:nth-of-type(1)').css({
        transform: "",
        top: ""
      });
      $('#hamburgerBtn span:nth-of-type(2)').css('width', '');
      $('#hamburgerBtn span:nth-of-type(3)').css({
        transform: "",
        top: ""
      });
    }
  });
  // ページ内リンク
  $('.l-header-list a').click(function () {
    var speed = 800;
    var adjust = $('header').height();
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    if ($(window).width() <= 1000) {
      $('.l-header-right').removeClass('active');
        $('.l-header-right').css({
          display: "none"
        });
        $('#hamburgerBtn span:nth-of-type(1)').css({
          transform: "",
          top: ""
        });
        $('#hamburgerBtn span:nth-of-type(2)').css('width', '');
        $('#hamburgerBtn span:nth-of-type(3)').css({
          transform: "",
          top: ""
        });
      }
    });
    return false;
	});
  // $('.l-header-list a').click(function () {
  //   var href = $(this).attr("href");
  //   var height=$(".l-header-inner").height();
  //   var target = $(href == "#" || href == "" ? 'html' : href);
  //   var position = target.offset().top - height; //ヘッダの高さ分位置をずらす
  //   $("html, body").animate({ scrollTop: position }, 550, "swing");
  //   return false;
  // });


// ページ内リンク
// $(function () {
//   var headerHight = 100; //ヘッダの高さ
//   $('a[href^=#]').click(function () {
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
//     $("html, body").animate({ scrollTop: position }, 550, "swing");
//     return false;
//   });
// });

// // ・スクロールアニメーション
// AOS.init()
