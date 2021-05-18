 $(function(){
      //スクロールに応じてヘッダーの背景色が変化
       $(window).scroll(function () {
          if ($(this).scrollTop() > 0) {
            $('.header-wrapper').addClass('active');
          } else {
            $('.header-wrapper').removeClass('active');
          }
        });

          //ページ内スムーズスクロール
   $('a[href^="#"]').click(function(){
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 300;
    $("html, body").animate({
      scrollTop: position
    },speed, "swing");
    return false;

    
  });
  
  //ページトップ
$("#js-page-top").on("click", function () {
$("body,html").animate({ scrollTop: 0, }, 400);
return false;
});



//ハンバーガーメニュー
$("#open").click(function(){
  $('body').addClass('is-drawerActive');
  $(this).hide(200);
});
$('#close').click(function(){
  $('body').removeClass('is-drawerActive');
  $('#open').show(200);
});


 })
 
 
 
