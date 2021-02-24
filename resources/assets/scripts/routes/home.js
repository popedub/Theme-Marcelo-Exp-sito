export default {
  init() {
    // JavaScript to be fired on all pages

    $(window).load(function () {
      $('h2').bigtext();
      $('h1').bigtext();
    })

    $.fn.randomize = function (selector) {
      var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

      $parents.each(function () {
        $(this).children(selector).sort(function (childA, childB) {
          // * Prevent last slide from being reordered
          if ($(childB).index() !== $(this).children(selector).length - 1) {
            return Math.round(Math.random()) - 0.5;
          }
        }.bind(this)).detach().appendTo(this);
      });

      return this;
    };
    $(document).ready(function () {
      $('.galeria').randomize().slick({
        autoplay: true,
        arrows: false,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 2000,

      })
    })
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    var w = $(window).width();
    if (w > 768) {
      $('header.banner').mouseenter(function () {
        $('.foto-home').css({
          'filter': 'blur(10px)',
          'opacity': '0.8',
        })

      })
      $('header.banner').mouseleave(function () {
        $('.foto-home').css({
          'filter': 'blur(0)',
          'opacity': '1',
        })

      })
    }


    $(window).resize(function () {
      $('h2').bigtext();
      $('h1').bigtext();
    })
  },
};
