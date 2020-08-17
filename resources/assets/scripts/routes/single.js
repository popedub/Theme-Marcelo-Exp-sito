export default {
  init() {
    // JavaScript to be fired on the about us page


    $('button.audio').click(function () {
      $(this).siblings().removeClass('active')
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.audio').toggleClass('show-sidebar');

      $(this).toggleClass('active');
      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.audio').removeClass('show-sidebar');
      } else {
        var top = $('.overlay-sidebar').offset().top - 100;
        $('html, body').delay(500).animate({ scrollTop: top }, 'slow');
      }
    })
    $('button.video').click(function () {
      $(this).siblings().removeClass('active');
      $('.overlay-sidebar').removeClass('show-sidebar');
      $('.overlay-sidebar.video').toggleClass('show-sidebar');
      $(this).toggleClass('active');
      if(!$(this).hasClass('active')) {
        $('.overlay-sidebar.video').removeClass('show-sidebar');
      } else {
        var top = $('.overlay-sidebar').offset().top - 100;
        $('html, body').delay(500).animate({ scrollTop: top }, 'slow');

      }
    })
    $('button.imagenes').click(function () {
      $(this).siblings().removeClass('active');
      $('.overlay-sidebar').removeClass('show-sidebar');
      $(this).toggleClass('active');
      $('.overlay-sidebar.imagenes').toggleClass('show-sidebar');
      if (!$(this).hasClass('active')) {
        $('.overlay-sidebar.imagenes').removeClass('show-sidebar');
      } else {
        var top = $('.overlay-sidebar').offset().top - 100;
        $('html, body').delay(500).animate({ scrollTop: top }, 'slow');
      }
    })
  },
};
