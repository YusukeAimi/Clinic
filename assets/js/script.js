$(function () {
  $(window).on('load resize', function() {
    //ヘッダーの高さ分だけコンテンツを下げる
    $(function() {
      var height=$(".l-header").height();
      var wheight=window.innerHeight;
      $(".l-content").css("margin-top", height);
      if ($(window).width() <= 1000) {
        $(".l-header-right").css("display", "none");
        $(".l-header-right").css("height", wheight-height);
        $(".l-header-right").css("margin-top", -3);
      }
      else {
        $(".l-header-right").css("display", "flex");
        $(".l-header-right").css("height", height);
        $(".l-header-right").css("margin-top", 0);
      }
      return true;
    });
  });
});


$(function () {
  $('#hamburgerBtn').click(function () {
    $('.l-header-right').toggleClass('active');
    if ($('.l-header-right').hasClass('active')) {
      $('.l-header-right').addClass('active');
      $('.l-header-right').css({
        display: "block"
      });
      $('.ham_line1').css({
        transform: "rotate(45deg)",
        top: "46px",
      });
      $('.ham_line2').css('width', '0');
      $('.ham_line3').css({
        transform: "rotate(-45deg)",
        top: "46px"
      });
      $('.globalMenu').css({
        transform: "translateY(0%)"
      });
      $('.main').css({
        opacity: "0.3",
        transition: "0.5s ease-out"
      });
    } else {
      $('.l-header-right').removeClass('active');
      $('.l-header-right').css({
        display: "none"
      });
      $('.ham_line1').css({
        transform: "",
        top: ""
      });
      $('.ham_line2').css('width', '');
      $('.ham_line3').css({
        transform: "",
        top: ""
      });
      $('.globalMenu').css({
        transform: ""
      });
      $('.main').css({
        opacity: "",
        transition: ""
      });
    }
  });
  $('a[href^=#]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
  $('.l-header-list a[href]').click(function () {
    $('.l-header-right').removeClass('active');
  });
});

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
