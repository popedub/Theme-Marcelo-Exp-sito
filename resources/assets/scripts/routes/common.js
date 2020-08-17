export default {
  init() {
    // JavaScript to be fired on all pages
    var btn = document.getElementById('menu');
    var close = document.getElementById('closeMenu');

    if (btn) {

      $(document).ready(function () {
        btn.addEventListener('click', function () {
          $('.overlay-slidedown').toggleClass('open');
          $('body').css('overflow', 'hidden');
        })

        close.addEventListener('click', function () {
          $('.overlay-slidedown').toggleClass('open');
          $('body').css('overflow', 'auto');
        })
      });
    }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
