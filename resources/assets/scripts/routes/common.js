export default {
  init() {
    // JavaScript to be fired on all pages
    var btn = document.getElementById('menu');
    var close = document.getElementById('closeMenu');

    if (btn) {

      $(document).ready(function () {
        btn.addEventListener('click', function () {
          $('.overlay-slidedown').toggleClass('open');
          $('html, body').css('overflow', 'hidden');
        })

        close.addEventListener('click', function () {
          $('.overlay-slidedown').toggleClass('open');
          $('html, body').css('overflow', 'auto');
        })
      });
    }
    $(document).ready(function () {
      $('.preload').css('display', 'block');
      $('.preload').css('opacity', '1');

      setTimeout(function () {
        $('.content_preload').css('opacity', '1');


      }, 500);
      setTimeout(function () {
        $('.content_preload').css('opacity', '0');


      }, 1500);

      setTimeout(function () {

        $('.preload').css('opacity', '0');
        $('.preload').css('display', 'none');

      }, 2500);
    })
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
