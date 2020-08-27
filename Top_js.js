$(function(){
    var topBtn = $('.page-top');
    topBtn.hide();
    $(window).scroll(function () {
      $(this).scrollTop() > 100 ? topBtn.fadeIn() : topBtn.fadeOut();
    });
    topBtn.click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  gsap.to('.head-visial-inner', {
  duration: 2, // 右側に2秒かけて移動するモーションを指定する
  y:'0px',
  opacity:1,
  stagger: {
      each:0.5,
  }
});

gsap.to('.info-card', {
    duration: 1, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.pick-card', {
    duration: 1, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.main_wrap', {
    duration: 2, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.contact-inner', {
    duration: 2, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });